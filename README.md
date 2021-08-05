This is a starter-kit / example repository for people who want to have multiple angular microfrontends coexist within a single page. Each
of the angular applications was created and is managed by Angular CLI.

It uses [single-spa](https://single-spa.js.org) to pull this off, which means that you can even add React, Vue, or other frameworks as
additional microfrontends.

For mapping routes to applications it uses [single-spa-layout](https://single-spa.github.io/single-spa.js.org/docs/layout-overview/).

## An important note
This github repository has four projects all in one repo. But when you do this yourself, **you'll want to have one git repo per
angular application**. The contianer project should also be in its own repo. This is what lets different teams and developers be in
charge of different microfrontends.

## Local development run single-spa -- one app at a time

With single-spa, it is preferred to run `ng serve` in only one single-spa application at a time, while using a deployed
version of the other applications. This makes for an awesome developer experience where you can boot up just one
microfrontend at a time, not even having to clone, npm install, or boot up all of the other ones.

To try this out, clone the repo and run the following commands:
```sh
# First terminal tab
cd contianer
npm install
npm start
```

## Local development -- all at once
It is preferred to only run one app at a time. But if you need to run them all locally, you can do so with the following instructions

```sh
# Second terminal tab
cd cip-app
npm install
npm start
```

```sh
# Third terminal tab
cd review-app
npm install
npm start
```

```sh
# Fourth terminal tab
cd main
npm install
npm start
```

Now go to http://localhost:4500 in a browser. Note that you can change any of the ports for the projects by modifying the Import Map inside of
contianer/index.html.

## If you want to run app standalone

```sh
# For cip-app
cd cip-app
npm install (if you not install)
npm run start-default
```
Now go to http://localhost:4209 in a browser.

```sh
# For review-app
cd review-app
npm install (if you not install)
npm run start-default
```
Now go to http://localhost:4205 in a browser.

```sh
# For main
cd main
npm install (if you not install)
npm run start-default
```
Now go to http://localhost:4204 in a browser.