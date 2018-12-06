import React from 'react';
import {NavLink} from 'react-router-dom';
import {AnimatedWrapper} from '../AnimatedWrapper';

class PerformancePageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests</div>
			<div className='page-content'>

				<h2>Overhead</h2>

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

				<h2>Live performance</h2>
				<p>
					There are few performance examples available: &nbsp;
					<NavLink to='/performance-angular' activeClassName='selected'>Angular</NavLink>,&nbsp;
					<NavLink to='/performance-polymer' activeClassName='selected'>Polymer</NavLink>.
				</p>
				<p>
					Pages render up to 1000 web elements on demand.
				</p>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePage = AnimatedWrapper(PerformancePageComponent);