import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class PerformancePageAngularComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Performance tests: Angular</div>
			<div className='page-content'>
			</div>
		</React.Fragment>;
	}
}

export const PerformancePageAngular = AnimatedWrapper(PerformancePageAngularComponent);