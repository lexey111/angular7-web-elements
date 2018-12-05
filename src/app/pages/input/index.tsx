import React from 'react';
import {AnimatedWrapper} from '../AnimatedWrapper';

class TCInputPageComponent extends React.Component {
	protected setState;

	public state = {
		textOfFirstInput: 'String'
	};

	private firstInputRef: HTMLInputElement | null = null;

	private assignRef(ref: HTMLInputElement) {
		if (this.firstInputRef) {
			return;
		}
		this.firstInputRef = ref;
		this.firstInputRef.addEventListener('change', (event: any) => {
			console.log('Changed', event.detail);

			this.setState({...this.state, textOfFirstInput: event.detail});
		});
	}

	render() {
		return <React.Fragment>
			<div className='section-header'>TC-INPUT-TEXT</div>
			<div className='page-content'>
				<p>
					This is <code>tc-input-text</code> web element from Angular:
				</p>

				<h3 className='form-section'>Just a field</h3>
				<div className='input-element'>
					<tc-input-text value='String' ref={i => this.assignRef(i)}></tc-input-text>
				</div>
				<p><i>See console on typing: [{this.state.textOfFirstInput}]</i></p>

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

				<h3 className='form-section'>With text add-on</h3>
				<div className='input-element'>
					<tc-input-text label='Text label'
					               placeholder='Placeholder text'>

						<div className='addon-control append'>
							<span>42</span>
						</div>
					</tc-input-text>
				</div>

				<h3 className='form-section'>With content below</h3>
				<div className='input-element'>
					<tc-input-text label='Text label'
					               placeholder='Placeholder text'>

						<div className='below-control'>
							<p>Validation message</p>
							<p>Additional information message</p>
						</div>
					</tc-input-text>
				</div>

			</div>
		</React.Fragment>;
	}
}

export const TCInputPage = AnimatedWrapper(TCInputPageComponent);