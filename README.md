# generator-angular-lib
Setting up everything for publishing a new angular2+ library can be quite a tedious task. To make this task as easy as possible I build this yeoman generator.

There are also [other](https://github.com/jvandemo/generator-angular2-library) [options](https://github.com/mgonto/generator-angularjs-gulp-library) out there, but they we're lacking features I wanted, such as a pre-configured GitHub pages demo page, wallaby.js support, automatic changelogs and a basic boilerplate which includes code to provide a configuration interface for the component. 

### Features
* Sensible boilerplate for your angular2+ library
* Easy compiling publishing of your module to npm and GitHub
* An [angular-cli](https://github.com/angular/angular-cli) based demo application, which can be published to **GitHub pages** with a single command. You can find an [example here](https://johannesjo.github.io/angular2-promise-buttons).
* Automatically integrates the contents of the README.md to the demo page
* A pre-configured **[travis](https://travis-ci.org/)** integration with a **[coveralls](https://coveralls.io/)** hook.
* Preconfigured badges for npm version and unit coverage.
* Preconfigured **wallaby.js** to run your unit tests inside your ide.
* Automatic CHANGELOG.md creation based on the [angular commit conventions](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).  


## Getting started
```
# install yeoman
npm install -g yo generator-a2lib

# either create a directory or clone your empty repository from github
mkdir my-new-mod && cd my-new-mod

# start the generator. `my-new-mod` should be whatever your module is called to github
yo a2lib my-new-mod 

# you will need to enter your github user name in the process
```


## Tasks
`npm start`: Starts the development server.

`npm run` **test-watch**: Runs the unit tests via karma.

`npm run` **test**: Runs the unit tests once.

`npm run` **test-coverage**: Runs the unit tests with a coverage report.

`npm run` **build**: Creates a compiled version of your library inside the dist folder.

`npm run` **demo.deploy**: 
Builds the demo app to demo/dist, copies the readme to it and publishes everything to github pages.
 
`npm run` **release.changelog**:
Creates a changelog based on the [angular commit conventions](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).  
 
`npm run` **link-mod**: Creates a symlink to the module inside the demo/src folder. This is required for compiling the app with aot.
 
`npm run` **lint**: Lints all demo and library files
 
`npm run` **e2e**: Runs the end2end tests.

`npm run` **total-patch-publish**: Creates a patch version (e.g. from 1.1.2 to 1.1.3) a changelog and releases everything to GitHub and npm. Also updates the demo on GitHub pages.

## Releasing your library
```
npm version [major,minor,patch] && npm publish && git push --tags && git push
```

## Folder Layout
**demo/src**: The files of the demo application.

**demo/src/app/component-symlink**: Currently angular-cli is unable to do aot, when files outside of the demo/src folder are included. That's why we symlink ./src to ./demo/src/app/component-symlink and include it from there.

**demo/dist**: The compiled files of the demo app.
 
**src**: The files of your library.

**dist**: The compiled files of your library.

**e2e**: Folder for the e2e tests.

**scripts**: Home of several build related content files.

