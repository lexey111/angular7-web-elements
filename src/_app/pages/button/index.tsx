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
					This is <code>custom-button</code> web element built with Angular 7:
				</p>
				<p>
					<custom-button label='First Value' hidden></custom-button>
				</p>

				<p>These have styles overridden:</p>
				<p>
					<custom-button label='First Value' hidden class='themed'></custom-button>
					<custom-button label='First Value' hidden class='themed-dark'></custom-button>
				</p>
				<p>
					Click handling attached to the button works from VanillaJS.
				</p>
			</div>
		</React.Fragment>;
	}
}

export const CustomButtonPage = AnimatedWrapper(CustomButtonPageComponent);