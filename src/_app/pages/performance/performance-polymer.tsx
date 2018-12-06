import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';
import {fakeNames} from './fake-names';

class PerformancePagePolymerComponent extends React.Component {
	protected setState;
	state = {
		showData: 0
	};

	private show10() {
		this.setState({showData: 10});
	}

	private show100() {
		this.setState({showData: 100});
	}

	private show500() {
		this.setState({showData: 500});
	}

	private show1000() {
		this.setState({showData: 1000});
	}

	private hideAll() {
		this.setState({showData: 0});
	}

	render() {
		const names = fakeNames.slice(0, this.state.showData);
		return <React.Fragment>
			<div className='section-header'>Performance tests: Polymer</div>
			<div className='page-content'>
				<p>
					{this.state.showData > 0 &&
					<button className='press press-red' onClick={this.hideAll.bind(this)}>Hide all</button>
					}
					<button className='press press-blue' onClick={this.show10.bind(this)}>Show 10</button>
					<button className='press press-blue' onClick={this.show100.bind(this)}>Show 100</button>
					<button className='press press-blue' onClick={this.show500.bind(this)}>Show 500</button>
					<button className='press press-blue' onClick={this.show1000.bind(this)}>Show 1000</button>
				</p>
				{this.state.showData > 0 &&
				<hr/>
				}
				<div className='block-block'>
					{names.map((name, idx) => {
						return <user-card name={name + ' | ' + (idx + 1)} key={idx}/>;
					})}
				</div>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePagePolymer = AnimatedWrapper(PerformancePagePolymerComponent);