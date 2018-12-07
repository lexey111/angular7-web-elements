import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';
import {fakeNames} from './fake-names';

interface IReactUserCardProps {
	iconBackground: string;
	iconColor?: string;
	name: string;
}

class ReactUserCard extends React.Component<IReactUserCardProps> {
	constructor(private props: IReactUserCardProps) {
		super(props);
	}

	render() {
		const firstLetter = this.props.name.substr(0, 1);
		const backgroundStyle = {backgroundColor: this.props.iconBackground || '#888'};
		const textStyle = {color: this.props.iconColor || '#fff'};

		return <div className='user-card-wrapper'>
			<div className='user-card-icon' style={backgroundStyle}>
				<span style={textStyle}>{firstLetter}</span>
			</div>
			<div className='user-card-content external-card-content'>
				Hello, {this.props.name}

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					A cupiditate doloremque et illo maiores quae tempore voluptate.
					Consectetur dolore eveniet, harum illum laudantium nulla quam
					repellat similique, tempore ullam veritatis.
				</p>
			</div>
		</div>;
	}
}

class PerformancePageNativeComponent extends React.Component {
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
			<div className='section-header'>Performance tests: React Cards</div>
			<div className='page-content'>
				<p>
					The page renders up to 1000 React-based User Cards.
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
				<div className='block-block'>
					{this.state.data.map((name, idx) => {
						return <div className='react-user-card' key={idx}>
							<ReactUserCard
								name={name + ' | ' + (idx + 1)}
								iconBackground={this.colors[Math.floor(Math.random() * this.colors.length)]}
							/>
						</div>;
					})}
				</div>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePageNative = AnimatedWrapper(PerformancePageNativeComponent);