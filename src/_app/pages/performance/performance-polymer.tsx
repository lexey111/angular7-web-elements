import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class PerformancePagePolymerComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests: Polymer</div>
			<div className='page-content'>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePagePolymer = AnimatedWrapper(PerformancePagePolymerComponent);