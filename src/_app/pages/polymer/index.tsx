import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class CustomPolymerPageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Polymer element</div>
			<div className='page-content'>
				<p>
					This is <code>user-card</code> web element built with <a href='https://www.polymer-project.org/' target='_blank'>Polymer</a> (JS + Polymer
					+ <a href='https://lit-element.polymer-project.org/' target='_blank'>LitElement</a>):
				</p>
				<p>
					<user-card name='First User'></user-card>
				</p>

				<p>These have styles overridden:</p>
				<p>
				</p>
			</div>
		</React.Fragment>;
	}
}

export const CustomPolymerPage = AnimatedWrapper(CustomPolymerPageComponent);