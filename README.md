# FeathersChatAngular

This is an angular client for feathers' demo chat application [feathers-chat](https://github.com/feathersjs/feathers-chat).

Some of the abstraction layers used are not strictly necessary for this app's (fairly limited) functionality. They were used to follow best-practice and provide an overview of what a more sophisticated application using feathers could look like.

## How to set this up

The [feathers-chat](https://github.com/feathersjs/feathers-chat) server must be running. Check their repository for further instructions.

    # it's recommended install angular-cli globally, but you don't have to 
    npm i -g angular-cli
    
    # clone this repository
    git clone https://github.com/feathersjs/feathers-chat-angular.git
    
    # change directory
    cd feathers-chat-angular
    
    # install dependencies
    npm install
    
    # run 
    # (if you have angular-cli installed globally)
    ng serve
    # (if you haven't)
    npm start
    # (also possible)
    node_modules/.bin/ng serve
    
Then navigate to [localhost:4200](http://localhost:4200) 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
