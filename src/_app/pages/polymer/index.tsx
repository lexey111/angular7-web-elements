import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class PolymerPageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>Polymer element</div>
			<div className='page-content'>
				<p>
					This is <code>user-card</code> web element built with <a href='https://www.polymer-project.org/' target='_blank'>Polymer</a>:
				</p>

				<div className='block-block'>
					<user-card name='First User'/>
					<user-card name='Second User' icon-background='maroon' icon-color='red'/>
				</div>

				<p>
					The only way to style Polymer-based components is using of <code>--css-variables</code>:
				</p>

				<div className='block-block'>
					<user-card name='New User' class='colorful-card' icon-background='#1c5c84'/>
					<p className='comment'>
						If everything is OK card background should be bluish.
					</p>
				</div>


				<p>
					But this approach does not work properly in IE11 due to absent support of css variables. Global style override could be used instead, but
					this is rather messy and tricky way that involves IE-specific stylesheets, naming conventions etc.
				</p>
				<p>
					Also IE11 does not provide correct direct style assignment, whereas shared css modules are supported.
				</p>

			</div>
		</React.Fragment>;
	}
}

export const PolymerPage = AnimatedWrapper(PolymerPageComponent);