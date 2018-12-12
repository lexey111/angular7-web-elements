Angular 7 Web Elements PoC and performance measurement
===

This is React application which uses Angular 7 Web Element approach as well as Polymer-based components.

Installation
--
1. Download repository, open folder.
2. Have actual NodeJS and NPM installed.
3. `npm install`
4. `start.bat` or `npm run start`
5. Open a browser, [http://localhost:3030/index](http://localhost:3030/index)

Under the hood
---
* React 16
* Angular 7.1
* Polymer 3
* Vanilla JS
* Webpack 4
* Typescript 3
* Babel (for IE11)
* [Vaadin](https://vaadin.com/) as an example of 3rd-party elements
* [Chartist](https://gionkunz.github.io/chartist-js/) as and example of 3rd-party pure JS widgets

This is hybrid application. Main page (and whole application) written with React, but it uses custom elements created with Angular and Polymer.

Interesting: application uses one Webpack build script to process all the parts simultaneously and provide different bundles and pages.

Browsers support
--
* Chrome (tested in v70)
* Firefox (63)
* Edge (44)
* IE (11)