import React from 'react';
import {NavLink} from 'react-router-dom';
import {AnimatedWrapper} from '../AnimatedWrapper';

declare const Chartist: any;

class PerformancePageComponent extends React.Component {
	public renderPre(strArr: Array<string>) {
		return <div className='pre'>
			{strArr.map((line, idx) => <p key={idx}>{line}</p>)}
		</div>;
	}

	componentDidMount() {
		const barData = {
			labels: ['Chrome', 'Firefox', 'Edge', 'IE 11'],
			series: [
				{name: 'Native', data: [0.9, 1.05, 2.4, 4.5]},
				{name: 'Polymer', data: [1.05, 1.4, 2.6, 8.4]},
				{name: 'Angular', data: [1.7, 2.1, 7.6, 16.5]}
			]
		};

		const barOptions = {
			fullWidth: true,
			chartPadding: {
				right: 20,
				top: 60
			},
			height: 300,
			plugins: [
				Chartist.plugins.legend({})
			]
		};
		Chartist.Bar('#ct-chart-1', barData, barOptions);

		const barData2 = {
			labels: ['Native', 'Polymer', 'Angular'],
			series: [
				{name: 'Chrome', data: [1, .857, 0.529]},
				{name: 'Firefox', data: [.857, .6423, .4285]},
				{name: 'Edge', data: [.375, .1184, .3461]},
				{name: 'IE 11', data: [.2, .1071, .0545]},
			]
		};

		Chartist.Bar('#ct-chart-2', barData2, barOptions);
	}

	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests</div>
			<div className='page-content summary'>
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
					Rendering of 1000 interactive Text Inputs, seconds / ratio to the native value plus performance slowdown percentage:
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
						<td>1.7 <span>1.8</span> <i>-48%</i></td>
						<td>1.05 <span>1.17</span> <i>-14%</i></td>
					</tr>
					<tr>
						<td>Firefox</td>
						<td>1.05</td>
						<td>2.1 <span>2</span> <i>-50%</i></td>
						<td>1.4 <span>1.3</span> <i>-25%</i></td>
					</tr>
					<tr>
						<td>Edge</td>
						<td>2.4</td>
						<td>7.6 <span>3.2</span> <i>-68%</i></td>
						<td>2.6 <span>1.1</span> <i>-8%</i></td>
					</tr>
					<tr>
						<td>IE 11</td>
						<td>4.5</td>
						<td>16.5 <span>3.6</span> <i>-63%</i></td>
						<td>8.4 <span>1.9</span> <i>-46%</i></td>
					</tr>
					</tbody>
				</table>

				<p>
					<u>Disclaimer:</u> all the measurement were gathered for development mode build. Production build has to be significantly faster,
					performance ratio stills the same, though.
				</p>

				<h4>Graphics: rendering time by technology</h4>
				<div className='ct-chart ct-perfect-fifth' id='ct-chart-1'></div>
				<p className='comment right max-600'><i>smaller is better</i></p>

				<h4>Graphics: browser's speed to Chrome</h4>
				<div className='ct-chart ct-perfect-fifth' id='ct-chart-2'></div>

				<h4>Conclusion</h4>
				<p>
					Angular-based web elements are two times slower than Polymer based but are a lot simpler (and cozy) during the implementation. However,
					Polymer's complexity could be compensated with work organization and common guides.
				</p>
				<p>
					Performance slowdown is rather significant, especially for IE and Edge and Angular Components, whereas simple Polymer-based components are
					fast almost as native for framework. However, resulting performance allows to use the approach at least with contemporary browsers.
				</p>
				<p>
					Performance of web element itself is very good even with IE11 (see <a href='./index_rich.html' target='_blank'>the grid</a> on the page).
				</p>
				<hr/>

				<h3>Size overhead</h3>

				<table className='stat-table'>
					<thead>
					<tr>
						<th>Content</th>
						<th>Size, production</th>
						<th>Size, development</th>
					</tr>
					</thead>
					<tbody>
					<tr className="payload">
						<td>
							Elements itself, Angular
							<p>2 components</p>
						</td>
						<td>10Kb</td>
						<td>48Kb</td>
					</tr>
					<tr className="payload">
						<td>
							Elements itself, Polymer
							<p>~12 components</p>
						</td>
						<td>87Kb</td>
						<td>100Kb</td>
					</tr>
					<tr>
						<td>
							Common polyfills
							<p>IE polyfills + Fetch</p>
						</td>
						<td>92Kb</td>
						<td>92Kb</td>
					</tr>
					<tr>
						<td>
							Web components polyfill
							<p>Babel and web components bundle</p>
						</td>
						<td>113Kb</td>
						<td>113Kb</td>
					</tr>
					<tr>
						<td>
							Vaadin
							<p>3-rd party polymer-based elements</p>
						</td>
						<td>292Kb</td>
						<td>769Kb</td>
					</tr>
					<tr>
						<td>
							Polymer core layer
							<p>polymer.js</p>
						</td>
						<td>156Kb</td>
						<td>731Kb</td>
					</tr>
					<tr>
						<td>
							Angular core layer
							<p>vendor.js - Angular, RxJS etc.</p>
						</td>
						<td>478Kb</td>
						<td>2.3Mb</td>
					</tr>
					</tbody>
					<tfoot>
					<tr>
						<td></td>
						<td>1.1Mb</td>
						<td>4Mb</td>
					</tr>
					</tfoot>
				</table>

				<h4>Conclusion</h4>
				<p>
					Size overhead is rather significant for stand-alone applications, but for enterprise-level SPAs it's bearable. Especially if platforms of
					application and elements are the same (Angular + Angular) or where is no massive usage of 3rd party elements in case of Polymer (~300Kb of
					extra code).
				</p>

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
					Current version of ShadowDom is v0, and it is already deprecated. Meantime v1 isn't stable yet, and support level in different browsers
					isn't too inspiring. It means, with vast probability code will be executed within one or more polyfills.
				</p>
				<p>
					ShadowDOM style isolation brings to serious redundancy of embedded styles for repeating components, as well as to some glitches and bugs in,
					e.g., <code>z-index</code> for projected items in different browsers.
				</p>

				<h3>Overall maturity of toolchain</h3>

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
				<p>
					Has a lot more convenient development process if the main application is also Angular-based and their version of Angular match or very
					close. No Babel, pure Typescript, typings etc. But it has a little sense to use Web Elements in such case instead of native Angular
					components, though.
				</p>
				<p>
					Overall overhead of Angular-based web-elements is two times worse than Polymer's. However, this tradeoff could be bearable for some
					applications.
				</p>

				<h4>Conclusion</h4>
				<p>
					Both Polymer and Angular approaches are usable. Polymer has a significantly better performance in the end but requires a lot more attention
					to details during development and weird source code processing for IE11.
				</p>

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