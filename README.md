# portfolio
This is a copy of the source code in order to build my latest portfolio website. Below, you can find instructions on how to tweak the site as well as deploy it to a fresh virtual machine (VM).

## Developing the Site

In the project directory, you can run:

### `npm install`

Installs all dependencies of the project into the local directory. This is **required** before all other steps.

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Production Environment

For ease of setup, scripts are provided for deployment to Ubuntu 17.10 and Ubuntu 18.04 hosts with optimal settings for speed and security.

These scripts assume a user 'jeff' is on the system.

### From Ubuntu 17.10:
```
$ cd
$ wget --quiet https://raw.githubusercontent.com/gitmarkhubmunar/portfolio/master/server/provisioning-artful.sh && chmod +x provisioning-artful.sh && sudo ./provisioning-artful.sh
$ rm provisioning-artful.sh
```

### From Ubuntu 18.04:
```
$ cd
$ wget --quiet https://raw.githubusercontent.com/gitmarkhubmunar/portfolio/master/server/provisioning-bionic.sh && chmod +x provisioning-bionic.sh && sudo ./provisioning-bionic.sh
$ rm provisioning-bionic.sh
```

## Deployment

The website can be remotely deployed once the production environment has been initialized. Use the following command to do so:

```
$ ssh -i <keyfile> jeff@<host> /home/jeff/portfolio/server/deploy-web.sh
```
