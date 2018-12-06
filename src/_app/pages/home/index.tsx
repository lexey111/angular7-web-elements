import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class HomePageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Home page</div>
			<div className='page-content'>
				<h1>Angular 7 Web Elements PoC</h1>
				<p>
					This is React application which uses Angular 7 Web Element Approach. It's code provides some Components that are projected as custom
					elements.
				</p>

				<p>Original idea was this <a href='https://medium.com/@tomsu/wanna-create-an-angular-element-heres-how-73e2ea85bd28' target='_blank'>Medium
					Article</a>.</p>

				<h3>Pure HTML</h3>
				<p>
					<a href='./index_pure.html' target='_blank'>This link</a> will open separate page that is just a HTML and VanillaJS, no frameworks, with web
					elements.
				</p>

				<h2>Under the hood</h2>

				<ul>
					<li>Webpack 4</li>
					<li>Typescript 3</li>
					<li>React 16</li>
					<li>Angular 7.1</li>
					<li>Vanilla JS</li>
				</ul>

				<p>
					This is hybrid application. Main page (and whole application) written with React, but it uses custom elements provided by Angular — with all
					overhead, of course, though it isn't significant for large applications.
				</p>

				<p>
					Interesting: application uses one build script to process all the parts simultaneously.
				</p>

				<h2>Browsers support</h2>

				<ul>
					<li>Chrome (tested in v70)</li>
					<li>Firefox (63)</li>
					<li>Edge (44)</li>
					<li>IE (11)</li>
				</ul>

			</div>
		</React.Fragment>;
	}
}

export const HomePage = AnimatedWrapper(HomePageComponent);