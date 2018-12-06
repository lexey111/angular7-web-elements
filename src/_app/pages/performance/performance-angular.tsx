import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';
import {fakeNames} from './fake-names';

class PerformancePageAngularComponent extends React.Component {
	protected setState;
	state = {
		data: fakeNames.map(name => {
			const namePair = name.split(' ');
			return {firstName: namePair[0], secondName: namePair[1], label: name};
		}),
		showRecords: 0
	};

	private show10() {
		this.setState({...this.state, showRecords: 10});
	}

	private show100() {
		this.setState({...this.state, showRecords: 100});
	}

	private show500() {
		this.setState({...this.state, showRecords: 500});
	}

	private show1000() {
		this.setState({...this.state, showRecords: 1000});
	}

	private hideAll() {
		this.setState({...this.state, showRecords: 0});
	}

	private assignRef(ref: HTMLInputElement, idx: number) {
		if (!ref) {
			return;
		}
		ref.addEventListener('change', (event: any) => {
			console.log('Changed', event.detail);
			if (typeof event.detail !== 'string') {
				return;
			}
			setTimeout(() => {
				const newData = [...this.state.data];
				newData[idx].label = event.detail + ' ' + newData[idx].secondName;
				this.setState({...this.state, data: newData});
			}, 200);
		});
	}

	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests: Angular</div>
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
				<div className='input-element-grid'>
					{this.state.data.slice(0, this.state.showRecords).map((value, idx) => {
						return <tc-input-text class='input-element-grid-cell'
						                      label={value.label}
						                      value={value.firstName} key={idx}
						                      ref={i => this.assignRef(i, idx)}>
							<div className='addon-control append'>
								<span>{idx + 1}</span>
							</div>
						</tc-input-text>;
					})}
				</div>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePageAngular = AnimatedWrapper(PerformancePageAngularComponent);