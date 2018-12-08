import React from 'react';
import {NavLink} from 'react-router-dom';
import {AnimatedWrapper} from '../AnimatedWrapper';

class HomePageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Home page</div>
			<div className='page-content'>
				<h1>Angular 7 Web Elements PoC</h1>
				<p>
					This is React application which uses Angular 7 Web Element approach as well as Polymer-based components.
				</p>

				<p>Original idea was this <a href='https://medium.com/@tomsu/wanna-create-an-angular-element-heres-how-73e2ea85bd28' target='_blank'>Medium
					Article</a>.</p>

				<h3>Pure HTML</h3>
				<p>
					<a href='./index_pure.html' target='_blank'>This link</a> will open separate page that is just a HTML and VanillaJS, no frameworks, with web
					elements.
				</p>

				<p>
					<a href='./index_rich.html' target='_blank'>This page</a> is a mock of rich ui application.
				</p>

				<h2>Under the hood</h2>

				<ul>
					<li>React 16</li>
					<li>Angular 7.1</li>
					<li>Polymer 3</li>
					<li>Vanilla JS</li>
					<li>Webpack 4</li>
					<li>Typescript 3</li>
					<li>Babel (for IE11)</li>
				</ul>

				<p>
					This is hybrid application. Main page (and whole application) written with React, but it uses custom elements provided by Angular — with all
					overhead, of course, though it isn't too significant for large applications.
				</p>

				<p>
					Application uses one build script to process all the parts simultaneously.
				</p>

				<h2>Browsers support</h2>

				<ul>
					<li>Chrome (tested in v70)</li>
					<li>Firefox (63)</li>
					<li>Edge (44)</li>
					<li>IE (11)</li>
				</ul>

				<h2>Conclusion</h2>
				<p>
					There is a <NavLink to='/performance' activeClassName='selected'>special page</NavLink> where all the information gathered together.
				</p>

			</div>
		</React.Fragment>;
	}
}

export const HomePage = AnimatedWrapper(HomePageComponent);