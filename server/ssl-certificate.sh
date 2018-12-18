#!/bin/bash

## Let's Encrypt Server Setup 1.0
## Spencer Wohlers

## This script sets up the server for Let's Encrypt, a service that provides
## a no-cost SSL certificate. This script only needs to be run once, when the
## server is ready for HTTPS clients.

echo "jeff@thevisual.work
A
N
1" | certbot --apache certonly
rm /etc/ssl/certs/thevisual.crt
rm /etc/ssl/private/thevisual.key
ln -s /etc/letsencrypt/live/thevisual.work/fullchain.pem /etc/ssl/certs/thevisual.crt
ln -s /etc/letsencrypt/live/thevisual.work/privkey.pem /etc/ssl/private/thevisual.key
echo "#!/bin/bash

/usr/bin/certbot renew --post-hook \"apachectl restart\"
" | cat > /etc/cron.weekly/certbot
chmod +x /etc/cron.weekly/certbot
