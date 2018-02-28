#!/bin/bash

## provisioning-artful.sh 1.0
## Spencer Wohlers

## This script takes a fresh Ubuntu Server 17.10 "Artful Aardvark" install and
## configures it for use as a server for The Visual, Jeff's portfolio website.

## Differences over previous deployments:
##   - now supports SSL
##   - now supports HTTP/2
##   - now supports htaccess
##   - now supports client-side caching
##   - web server now comes back up after server restarts

TOTAL_STEPS=15
OUTPUT_LOG=output.log
ERROR_LOG=error.log
EXPECTED_ERRORS=0

echo ""

# Install required packages
echo "( 1/$TOTAL_STEPS) Updating Ubuntu from regular repositories."
apt-get update >>$OUTPUT_LOG 2>>$ERROR_LOG
apt-get dist-upgrade -y >>$OUTPUT_LOG 2>>$ERROR_LOG
apt-get install build-essential openssh-server linux-headers-generic npm node-gyp software-properties-common -y >>$OUTPUT_LOG 2>>$ERROR_LOG
apt-get autoremove -y >>$OUTPUT_LOG 2>>$ERROR_LOG

echo "( 2/$TOTAL_STEPS) Installing Let's Encrypt's certbot client."
add-apt-repository ppa:certbot/certbot -y >>$OUTPUT_LOG 2>>/dev/null
apt-get update >>$OUTPUT_LOG 2>>$ERROR_LOG
apt-get install python-certbot-apache -y >>$OUTPUT_LOG 2>>$ERROR_LOG

echo "( 3/$TOTAL_STEPS) Installing Apache from experimental repositories."
add-apt-repository ppa:ondrej/apache2 -y >>$OUTPUT_LOG 2>>/dev/null
apt-get update >>$OUTPUT_LOG 2>>$ERROR_LOG
apt-get install apache2 -y >>$OUTPUT_LOG 2>>$ERROR_LOG

# Turn off Apache, if running
echo "( 4/$TOTAL_STEPS) Stopping Apache, if running."
systemctl stop apache2 >>$OUTPUT_LOG 2>>$ERROR_LOG

# Add user to group
echo "( 5/$TOTAL_STEPS) Adding user 'jeff' to group 'www-data'."
usermod -a -G www-data jeff

# Setup destination HTML directory
echo "( 6/$TOTAL_STEPS) Setting up production HTML directory."
rm -rf /var/www
mkdir -p /var/www/html
chown -R jeff:www-data /var/www
chmod -R 0775 /var/www

# Grab latest copy of repository
echo "( 7/$TOTAL_STEPS) Grabbing latest copy of repository."
su - jeff -c "git clone https://github.com/gitmarkhubmunar/portfolio.git ~/portfolio" >>$OUTPUT_LOG 2>>/dev/null

echo "( 8/$TOTAL_STEPS) Installing portfolio node dependencies."
su - jeff -c "cd ~/portfolio && npm install" >>$OUTPUT_LOG 2>>/dev/null

# Setup Apache dependencies
echo "( 9/$TOTAL_STEPS) Enabling Apache dependencies."
a2enmod http2 >>$OUTPUT_LOG 2>>$ERROR_LOG
a2enmod ssl >>$OUTPUT_LOG 2>>$ERROR_LOG
a2enmod headers >>$OUTPUT_LOG 2>>$ERROR_LOG
a2enmod rewrite >>$OUTPUT_LOG 2>>$ERROR_LOG

# Generate self-signed certificate
echo "(10/$TOTAL_STEPS) Generating self-signed certificate."
echo "US
California
San Francisco
The Visual
.
thevisual.dev
jeff@thevisual.work" | openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/thevisual.key -out /etc/ssl/certs/thevisual.crt >>$OUTPUT_LOG 2>>/dev/null

echo "(11/$TOTAL_STEPS) Creating Diffie-Hellman group for Forward Secrecy. (Be patient.)"
openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048 >>$OUTPUT_LOG 2>>/dev/null

# Setup Apache configuration
echo "(12/$TOTAL_STEPS) Configuring Apache."
rm /etc/apache2/sites-available/*
rm /etc/apache2/sites-enabled/*
cp /home/jeff/portfolio/server/thevisual.conf /etc/apache2/sites-available
cp /home/jeff/portfolio/server/ssl-params.conf /etc/apache2/conf-available
a2ensite thevisual >>$OUTPUT_LOG 2>>$ERROR_LOG
a2enconf ssl-params >>$OUTPUT_LOG 2>>$ERROR_LOG

# Prepare the website
echo "(13/$TOTAL_STEPS) Running website setup script."
chmod +x /home/jeff/portfolio/server/deploy-web.sh
su - jeff -c "~/portfolio/server/deploy-web.sh"

# Open the firewall ports
echo "(14/$TOTAL_STEPS) Enabling firewall and opening ports."
ufw allow ssh >>$OUTPUT_LOG 2>>$ERROR_LOG
ufw allow http >>$OUTPUT_LOG 2>>$ERROR_LOG
ufw allow https >>$OUTPUT_LOG 2>>$ERROR_LOG
echo "y" | ufw enable >>$OUTPUT_LOG 2>>$ERROR_LOG

# Bring up the website
echo "(15/$TOTAL_STEPS) Starting Apache."
systemctl start apache2 >>$OUTPUT_LOG 2>>$ERROR_LOG

echo ""

NUM_ERRORS=$(cat error.log | wc -l)

if (( NUM_ERRORS > EXPECTED_ERRORS )); then
    echo "Something may have gone wrong."
    echo "I saw $NET_ERRORS more lines of error than expected."
    echo "Check $ERROR_LOG for details."
else
    echo "Everything looks good. Check $OUTPUT_LOG for additional details."
    echo "Please reboot the system as soon as possible."
fi
