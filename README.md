# Coexisting Angular Microfrontends

This is a starter-kit / example repository for people who want to have multiple angular microfrontends coexist within a single page. Each
of the angular applications was created and is managed by Angular CLI.

It uses [single-spa](https://single-spa.js.org) to pull this off, which means that you can even add React, Vue, or other frameworks as
additional microfrontends.

For mapping routes to applications it uses [single-spa-layout](https://single-spa.github.io/single-spa.js.org/docs/layout-overview/).

## An important note
This github repository has four projects all in one repo. But when you do this yourself, **you'll want to have one git repo per
angular application**. The root-html-file project should also be in its own repo. This is what lets different teams and developers be in
charge of different microfrontends.

## Local development -- all at once
It is preferred to only run one app at a time. But if you need to run them all locally, you can do so with the following instructions

```sh
# First terminal tab
cd root-html-file
npm install
npm start
```
```sh
# Second terminal tab
cd app1
npm install
npm start
```

```sh
# Third terminal tab
cd app2
npm install
npm start
```

```sh
# Fourth terminal tab
cd navbar
npm install
npm start
```

Now go to http://localhost:4210 in a browser. Note that you can change any of the ports for the projects by modifying the Import Map inside of
root-html-file/index.html.
