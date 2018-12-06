Angular 7 Web Elements PoC
===

This is React application which uses Angular 7 Web Element approach as well as Polymer-based components.

Original idea was this [Medium Article](https://medium.com/@tomsu/wanna-create-an-angular-element-heres-how-73e2ea85bd28).

Installation
--
1. Download repository, open folder.
2. `npm install`
3. `start.bat`
4. Open browser, [http://localhost:3030/index](http://localhost:3030/index)

Under the hood
---
* React 16
* Angular 7.1
* Polymer 3
* Vanilla JS
* Webpack 4
* Typescript 3
* Babel (for IE11)

This is hybrid application. Main page (and whole application) written with React, but it uses custom elements provided by Angular — with all overhead, of course, though it isn't too significant for large applications.

Interesting: application uses one build script to process all the parts simultaneously.

Browsers support
--
* Chrome (tested in v70)
* Firefox (63)
* Edge (44)
* IE (11)