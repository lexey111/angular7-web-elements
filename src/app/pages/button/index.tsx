import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class CustomButtonPageComponent extends React.Component {
	componentDidMount() {
		if (window['doVanilla']) {
			window['doVanilla']();
		}
	}

	render() {
		return <React.Fragment>
			<div className='section-header'>Custom button</div>
			<div className='page-content'>
				<p>
					This is <code>custom-button</code> web element from angular:
				</p>
				<custom-button label='First Value' hidden></custom-button>
				<p>
					Click handling attached to the button works from VanillaJS.
				</p>
			</div>
		</React.Fragment>;
	}
}

export const CustomButtonPage = AnimatedWrapper(CustomButtonPageComponent);