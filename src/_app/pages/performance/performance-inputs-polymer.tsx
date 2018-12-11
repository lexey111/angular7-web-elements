import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';
import {fakeNames} from './fake-names';

type CInputValue = {
	label: string,
	idx: number,
	firstName: string,
	secondName: string
};

interface IWrappedPMInputState {
	value: CInputValue;
	onChanged: (value: CInputValue) => void;
}

interface IWrappedPMInputProps extends IWrappedPMInputState {
	onChanged: (value: CInputValue) => void;
}

class WrappedPolymerInput extends React.Component<IWrappedPMInputProps, IWrappedPMInputState> {
	protected setState;
	private inputRef: HTMLInputElement | null = null;

	private state: CInputValue = {...this.props.value};

	constructor(private props: IWrappedPMInputProps) {
		super(props);
	}

	private assignRef(ref: HTMLInputElement) {
		if (this.inputRef) {
			return;
		}
		this.inputRef = ref;
		this.inputRef.addEventListener('commit', (event: any) => {
			console.log('Committed', event.detail);
			this.setState({
				...this.state,
				firstName: event.detail,
				label: event.detail + ' ' + this.state.secondName
			}, () => {
				this.props.onChanged(this.state);
			});
		});
	}

	render() {
		const {idx, label, firstName, secondName} = this.state;

		return <pm-input-text label={label}
		                      idx={idx}
		                      firstName={firstName}
		                      secondName={secondName}
		                      ref={i => this.assignRef(i)}></pm-input-text>;
	}
}

class PerformancePagePolymerInputsComponent extends React.Component {
	protected setState;
	private initialData = fakeNames.map((name, idx) => {
		const namePair = name.split(' ');
		return {
			idx,
			firstName: namePair[0],
			secondName: namePair[1],
			label: name
		};
	});

	state = {
		data: [],
		showRecords: 0,
		recordsChanged: []
	};

	private setRecordsCount(count: number) {
		this.setState({
			showRecords: 0,
			data: [],
			recordsChanged: []
		}, () => {
			this.setState({
				showRecords: count,
				data: this.initialData.slice(0, count),
				recordsChanged: []
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

	private changeValue(value: CInputValue) {
		console.log('do commit!', value);
		const recordsChanged = [...this.state.recordsChanged];
		const newData = this.state.data.map(record => {
			if (record.idx !== value.idx || record.firstName === value.firstName) {
				return record;
			}
			recordsChanged.push({
				time: new Date().toString(),
				idx: record.idx,
				oldValue: record.firstName,
				newValue: value.firstName,
			});

			return value;
		});

		this.setState({
			...this.state,
			data: newData,
			recordsChanged: recordsChanged
		});
	}

	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests: Inputs, Polymer</div>
			<div className='page-content'>
				<p>
					The page renders up to 1000 Polymer-based input elements.
				</p>
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
					{this.state.data
						.map((value, idx) => {
							return <React.Fragment key={idx}>
								<WrappedPolymerInput value={value}
								                     onChanged={this.changeValue.bind(this)}
								/>
							</React.Fragment>;
						})}
				</div>
				{this.state.recordsChanged.length > 0 &&
				<div className='input-element-grid-stat'>
					<h3>Changed records</h3>
					{this.state.recordsChanged
						.map((item, idx) => {
							return <ul key={idx}>
								<li>Time: {item.time}</li>
								<li>Index: {item.idx + 1}</li>
								<li>Old value: {item.oldValue}</li>
								<li>New value: {item.newValue}</li>
							</ul>;
						})}
				</div>
				}
			</div>
		</React.Fragment>;
	}
}

export const PerformancePagePolymerInputs = AnimatedWrapper(PerformancePagePolymerInputsComponent);