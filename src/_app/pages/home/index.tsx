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

				<h2>Other examples</h2>
				<p>
					<button className='press press-purple' onClick={() => window.open('./index_pure.html')}>Simple page</button>
					<button className='press press-green' onClick={() => window.open('./index_rich.html')}>Rich UI page</button>
				</p>

				<h2>Under the hood</h2>

				<ul>
					<li><a href='https://reactjs.org/' target='_blank'>React 16</a></li>
					<li><a href='https://angular.io/' target='_blank'>Angular 7.1</a></li>
					<li>Polymer
						<ul>
							<li><a href='https://www.polymer-project.org/' target='_blank'>Polymer 3</a></li>
							<li><a href='https://lit-html.polymer-project.org/guide/concepts' target='_blank'>Lit-html</a></li>
						</ul>
					</li>
					<li><a href='https://vaadin.com/' target='_blank'>Vaadin components</a></li>
					<li><a href='http://gionkunz.github.io/chartist-js/getting-started.html' target='_blank'>Chartist library</a></li>
					<li>Vanilla JS</li>
					<li><a href='https://webpack.js.org/' target='_blank'>Webpack 4</a></li>
					<li><a href='https://www.typescriptlang.org/' target='_blank'>Typescript 3</a></li>
					<li><a href='http://lesscss.org/' target='_blank'>LESS</a></li>
					<li><a href='https://babeljs.io/' target='_blank'>Babel (for IE11)</a></li>
				</ul>

				<p>
					This is hybrid application. Main page (and whole application) written with React, but it uses custom elements provided by Angular.
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