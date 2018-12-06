import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class PerformancePageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests</div>
			<div className='page-content'>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePage = AnimatedWrapper(PerformancePageComponent);