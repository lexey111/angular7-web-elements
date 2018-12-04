Angular 7 Web Elements PoC
===

This is Angular 7 application which uses Web Element Approach. It's code provides some <code>Components</code> that are projected as <code>custom elements</code>.

Original idea was this [Medium Article](https://medium.com/@tomsu/wanna-create-an-angular-element-heres-how-73e2ea85bd28).

Under the hood
---
* Webpack 4
* Typescript 3
* React 16
* Angular 7.1
* Vanilla JS

This is hybrid application. Main page (and whole application) written with React, but it uses custom elements provided by Angular &mdash; with all overhead, of course, though it isn't significant for large applications.

Interesting: application uses one build script to process all the parts simultaneously.

Browsers support
--
* Chrome (tested in v.70)
* Firefox (v.63)
* Edge (44)
* IE (11)