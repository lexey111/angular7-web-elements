import React from 'react';
import {NavLink} from 'react-router-dom';
import {AnimatedWrapper} from '../AnimatedWrapper';

class PerformancePageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests</div>
			<div className='page-content'>
				<h2>Conclusion</h2>

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
					<tr>
						<td>Elements</td>
						<td>10Kb</td>
						<td>46Kb</td>
					</tr>
					<tr>
						<td>Common polyfill</td>
						<td>92Kb</td>
						<td>92Kb</td>
					</tr>
					<tr>
						<td>Web components polyfill</td>
						<td>104Kb</td>
						<td>104Kb</td>
					</tr>
					<tr>
						<td>Angular core layer</td>
						<td>456Kb</td>
						<td>2.5Mb</td>
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