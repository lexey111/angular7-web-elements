import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';
import {fakeNames} from './fake-names';

class PerformancePagePolymerComponent extends React.Component {
	protected setState;
	state = {
		showRecords: 0,
		data: []
	};

	private setRecordsCount(count: number) {
		this.setState({
			showRecords: 0,
			data: [],
		}, () => {
			this.setState({
				showRecords: count,
				data: fakeNames.slice(0, count),
			});
		});
	}

	private show10() {
		this.setRecordsCount(10);
	}

	private show100() {
		this.setRecordsCount(100);
	}

	private show500() {
		this.setRecordsCount(500);
	}

	private show1000() {
		this.setRecordsCount(1000);
	}

	private hideAll() {
		this.setRecordsCount(0);
	}

	private readonly colors = ['black', 'blue', 'teal', 'maroon', 'green', 'gray', 'orange', 'olive'];

	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests: Polymer</div>
			<div className='page-content'>
				<p>
					{this.state.showRecords > 0 &&
					<button className='press press-red' onClick={this.hideAll.bind(this)}>Hide all</button>
					}
					<button className='press press-blue' onClick={this.show10.bind(this)}>Show 10</button>
					<button className='press press-blue' onClick={this.show100.bind(this)}>Show 100</button>
					<button className='press press-blue' onClick={this.show500.bind(this)}>Show 500</button>
					<button className='press press-blue' onClick={this.show1000.bind(this)}>Show 1000</button>
				</p>
				{this.state.showRecords > 0 &&
				<hr/>
				}
				<div className='block-block'>
					{this.state.data.map((name, idx) => {
						return <user-card
							name={name + ' | ' + (idx + 1)}
							icon-background={this.colors[Math.floor(Math.random() * this.colors.length)]}
							key={idx}/>;
					})}
				</div>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePagePolymer = AnimatedWrapper(PerformancePagePolymerComponent);