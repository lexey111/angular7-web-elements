import React from 'react';
import {NavLink} from 'react-router-dom';
import {AnimatedWrapper} from '../AnimatedWrapper';

class PerformancePageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests</div>
			<div className='page-content'>
				<h2>Summary</h2>

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

				<table className='stat-table'>
					<thead>
					<tr>
						<th>Task</th>
						<th>Time, Web elements (s)</th>
						<th>Time, React (s)</th>
						<th>Ratio</th>
					</tr>
					</thead>
					<tbody>
					<tr className='category'>
						<td colSpan='4'>
							Rendering of 1000 Inputs: Angular vs Native
						</td>
					</tr>
					<tr>
						<td>Chrome</td>
						<td>3.47</td>
						<td>1.41</td>
						<td>2.5</td>
					</tr>
					<tr>
						<td>Firefox</td>
						<td>1.1</td>
						<td>0.5</td>
						<td>2.2</td>
					</tr>
					<tr>
						<td>Edge</td>
						<td>6.9</td>
						<td>1.4</td>
						<td>5</td>
					</tr>
					<tr>
						<td>IE 11</td>
						<td>11.1</td>
						<td>2.8</td>
						<td>4</td>
					</tr>

					<tr className='category'>
						<td colSpan='4'>
							Rendering of 1000 User Cards: Polymer vs Native
						</td>
					</tr>

					<tr>
						<td>Chrome</td>
						<td>2.65</td>
						<td>2.0</td>
						<td>1.3</td>
					</tr>
					<tr>
						<td>Firefox</td>
						<td>0.3</td>
						<td>0.15</td>
						<td>2</td>
					</tr>
					<tr>
						<td>Edge</td>
						<td>0.98</td>
						<td>0.92</td>
						<td>1.06</td>
					</tr>
					<tr>
						<td>IE11</td>
						<td>2.12</td>
						<td>1.91</td>
						<td>1.1</td>
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

				<h4>Conclusion</h4>
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

				<h3>ShadowDOM versions</h3>
				<h3>Maturity of toolchain</h3>
				<h3>Maintainability</h3>
				<h3>Styling</h3>
				<h3>Build conveyor</h3>
				<h3>Summary</h3>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePage = AnimatedWrapper(PerformancePageComponent);