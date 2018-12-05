import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class HomePageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Home page</div>
			<div className='page-content'>
				Home
			</div>
		</React.Fragment>;
	}
}

export const HomePage = AnimatedWrapper(HomePageComponent);