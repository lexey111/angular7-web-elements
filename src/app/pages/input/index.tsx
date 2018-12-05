import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class TCInputPageComponent extends React.Component {
	render() {
		return <React.Fragment>
			<div className='section-header'>TC-INPUT-TEXT</div>
			<div className='page-content'>
				<p>
					This is <code>tc-input-text</code> web element from Angular:
				</p>

				<h3 className='form-section'>Just a field</h3>
				<div className='input-element'>
					<tc-input-text value='String'></tc-input-text>
				</div>

				<h3 className='form-section'>With label and placeholder</h3>
				<div className='input-element'>
					<tc-input-text label='Text label'
					               placeholder='Placeholder text'></tc-input-text>
				</div>

				<h3 className='form-section'>Disabled state</h3>
				<div className='input-element'>
					<tc-input-text label='Disabled'
					               disabled={true}
					               value='Some text'></tc-input-text>
				</div>
			</div>
		</React.Fragment>;
	}
}

export const TCInputPage = AnimatedWrapper(TCInputPageComponent);