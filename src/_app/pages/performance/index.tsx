import React from 'react';
import {NavLink} from 'react-router-dom';
import {AnimatedWrapper} from '../AnimatedWrapper';

class PerformancePageComponent extends React.Component {
	public renderPre(strArr: Array<string>) {
		return <div className='pre'>
			{strArr.map((line, idx) => <p key={idx}>{line}</p>)}
		</div>;
	}

	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests</div>
			<div className='page-content'>
				<h2>Conclusion</h2>
				<p>
					<u>Important:</u> all the information is actual for the end of 2018.
				</p>

				<h3>Overall performance</h3>
				<p>
					There are few performance examples available: &nbsp;
					<NavLink to='/performance-angular' activeClassName='selected'>Angular inputs</NavLink>,&nbsp;
					<NavLink to='/performance-inputs-native' activeClassName='selected'>React inputs (no web elements)</NavLink>,&nbsp;
					<NavLink to='/performance-polymer' activeClassName='selected'>Polymer cards</NavLink>,&nbsp;
					<NavLink to='/performance-cards-native' activeClassName='selected'>React cards (no web elements)</NavLink>.
				</p>
				<p>
					These pages render up to 1000 appropriate web elements on demand.
				</p>

				<h4>Task/Time measurements table</h4>
				<p>
					Rendering of 1000 Inputs, seconds / ratio to the native value:
				</p>
				<table className='stat-table'>
					<thead>
					<tr>
						<th>Task</th>
						<th>Native, React</th>
						<th>Angular</th>
						<th>Polymer</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Chrome</td>
						<td>0.9</td>
						<td>1.7 <span>1.8</span> <i>52%</i></td>
						<td>1.05 <span>1.17</span> <i>86%</i></td>
					</tr>
					<tr>
						<td>Firefox</td>
						<td>1.05</td>
						<td>2.1 <span>2</span> <i>50%</i></td>
						<td>1.4 <span>1.3</span> <i>75%</i></td>
					</tr>
					<tr>
						<td>Edge</td>
						<td>2.4</td>
						<td>7.6 <span>3.2</span> <i>32%</i></td>
						<td>2.6 <span>1.1</span> <i>92%</i></td>
					</tr>
					<tr>
						<td>IE 11</td>
						<td>4.5</td>
						<td>16.5 <span>3.6</span> <i>27%</i></td>
						<td>8.4 <span>1.9</span> <i>54%</i></td>
					</tr>
					</tbody>
				</table>

				<p>
					<u>Disclaimer 1:</u> all the numbers are relative. They are results of using embedded Developer/Performance tools except for IE11 that hangs
					and has been measured with stopwatch.
				</p>
				<p>
					<u>Disclaimer 2:</u> all the measurement were gathered for development mode build. Production build has to be significantly faster,
					performance ratio stills the same, though.
				</p>

				<h4>Analysis</h4>
				<p>
					Performance overhead is rather significant, especially for IE and Edge and Angular Components, whereas simple Polymer-based components are
					fast almost as native for framework. However, resulting performance allows to use the approach at least with contemporary browsers.
				</p>
				<hr/>

				<h3>Size overhead</h3>

				<table className='stat-table'>
					<thead>
					<tr>
						<th>Content</th>
						<th>Size, production (Kb)</th>
						<th>Size, development (Kb)</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Elements</td>
						<td>10</td>
						<td>46</td>
					</tr>
					<tr>
						<td>Common polyfill</td>
						<td>92</td>
						<td>92</td>
					</tr>
					<tr>
						<td>Web components polyfill</td>
						<td>104</td>
						<td>104</td>
					</tr>
					<tr>
						<td>Angular core layer</td>
						<td>456</td>
						<td>2500</td>
					</tr>
					</tbody>
					<tfoot>
					<tr>
						<td></td>
						<td>650Kb</td>
						<td>3Mb</td>
					</tr>
					</tfoot>
				</table>

				<h3>Usability &amp; Drawbacks</h3>
				<p>
					The main inconvenience with the components is data propagation and event firing. There are no usual ways like callbacks and dependency
					injections available, so passing the data to the element is an explicit procedure, and reacting to element state change
					involves <code>addEventListener</code> creation:
				</p>
				{this.renderPre([
					'...',
					'document.querySelector(\'#top-menu\').contextItems = globalData.contextSwitchItems;',
					'...',
					'document.querySelector(\'#home-icon\').addEventListener(\'click\', function () {',
					'   alert(\'Home icon clicked\');',
					'});',
				])}
				<p>
					Some common solution could be proposed, though, like event/data bus or wrappers, and some already exists in frameworks.
				</p>
				<p>
					Even with Typescript data type control is inevitable poor, IDE support isn't perfect as well yet.
				</p>
				<p>
					However, for simple UIs such trade off is bearable even with lightweight host-level frameworks like React of Vue.
				</p>

				<h3>ShadowDOM</h3>
				<p>
					Current version of ShadowDom is v0, and it's already deprecated. Meantime v1 isn't stable yet, and support level in different browsers isn't
					too inspiring. It means, with vast probability code will be executed within one or more polyfills.
				</p>
				<p>
					ShadowDOM style isolation brings to serious redundancy of embedded styles for repeating components, as well as to some glitches and bugs in,
					e.g., <code>z-index</code> for projected items in different browsers.
				</p>

				<h3>Maturity of toolchain</h3>

				<h4>Polymer</h4>
				<p>
					Toolchain for Polymer-based elements is complicated. Due to ES6, the only way to make IE11 works is Babel, and not just a
					plain Babel but very specific conveyor with a lot of hacks. Tricky and fragile.
				</p>
				<p>
					However, it is possible to make things works together. It just involves IE11 detection and dynamic feature and polyfill loaders, and, of
					course, IE-specific stylesheets.
				</p>
				<p>
					Event-handling and interaction with the components, especially passing the data and retrieving the results, is not too convenient. Developer
					must create specific listeners manually &mdash; or wrap the element into framework-based generic wrapper to provide more standard data flow.
				</p>

				<h4>Angular</h4>
				<p>...still need to be tested...</p>

				<h3>Styling</h3>
				<p>
					Polymer itself is rather mature, but sharing styles between the components, especially with <code>lit-html</code>, is a pain. It is very
					inconvenient and leads to overhead (repeatable lit-html based components) or to just merely maintainable set of styles.
				</p>
				<p>
					However, such styles could be resolved during build-time with more complicated builder, which, in its turn, going to be too complex, fragile
					and exact version dependent.
				</p>
				<p>
					Anyway, there are a lot of different stylish techniques: app-level .LESS, component-level .LESS, embedded CSS, shared modules... and <code>css
					variables</code> also not available for all the environments (IE11). It adds a lot of complexity to maintaining styles consistence,
					especially variables propagation, especially styles isolation in IE11.
				</p>
				<p>
					All the problems could be solved, mostly on build stage.
				</p>

				<h3>Build conveyor</h3>
				<p>
					Interesting, but Angular-only build conveyor seems to be the most simple and plain. This application builder configuration (Webpack 4) does
					all the work for &mdash;
				</p>

				<ul>
					<li>Angular 7 AOT Web Elements: <code>ng-tools</code></li>
					<li>Polymer 3 Elements: <code>Babel</code></li>
					<li>React 16 host: <code>TypeScript</code></li>
					<li>Static pages and assets: <code>copy-webpack-plugin</code></li>
				</ul>

				<p>
					For more complicated application it for sure will require separate builders, especially for component libraries.
				</p>

				<p>
					Due to such complicated behavior and a lot of aspects and things need to be taken into account, support of build system is going to be
					the crucial part.
				</p>

				<h2>Summary</h2>
				<p>
					Well, web elements technology is ready to use, but with a lot of things require a lot of attention on dependencies level, build level,
					styling level, compatibility etc. Whole solution, especially complicated, is rather fragile and unstable.
				</p>
				<p>
					It is possible to use them in modern application, though.
				</p>
				<p>
					A lot of items in toolchain, build and runtime, are under active development. It means poor documentation, changing APIs and sometimes
					incompatibilities.
				</p>
				<p>
					Crucial and mandatory: <b>dedicated team is a must</b> to keep things aligned and actual, to guarantee stability, performance
					and the same look and behavior in different browsers.
				</p>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePage = AnimatedWrapper(PerformancePageComponent);