# AttendanceApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## To build with docker:
* Run below command:
> docker build -t my-angular-app .


## How to make a shared folder between two containers:
* In this example, we are mounting the my-shared-volume volume to the /app/shared directory in both containers. This means that any files saved in the /app/shared directory in one container will be accessible from the other container.
> docker volume create my-shared-volume

> docker run -it --name frontend -v my-shared-volume:/app/shared frontend-image

> docker run -it --name backend -v my-shared-volume:/app/shared backend-image


Note that you will need to adjust the paths and directory names in the docker run commands to match the specifics of your project.

## To run the project without docker
Pre-requisites: 
* Angular requires an active [LTS or maintenance LTS version of Node.js](https://nodejs.org/en).
* Install npm package manager
  * This is mostly installed by default with nodejs. To check that you have the npm client installed, run npm -v in a terminal window.
* Run the following commands:
>npm install -g @angular/cli

>npm install
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


