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

				<div className='block-block'>
					<user-card name='First User'></user-card>
					<user-card name='Second User' background='maroon' color='red'></user-card>
				</div>

				<p>
					The only way to style Polymer-based components is using of <code>--css-variables</code>:
				</p>

				<div className='block-block'>
					<user-card name='First User' class='colorful-card' extraClass='colorful-card'></user-card>
				</div>

				<p>
					But this approach can't work in IE11.
				</p>
			</div>
		</React.Fragment>;
	}
}

export const CustomPolymerPage = AnimatedWrapper(CustomPolymerPageComponent);