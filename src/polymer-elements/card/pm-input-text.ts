import {html, LitElement} from '@polymer/lit-element';
// import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

customElements.define('pm-input-text', class extends LitElement {

		static get properties() {
			return {
				label: {type: String, value: 'Label'},
				firstName: {type: String, value: ''},
				idx: {type: Number, value: 0},
			};
		}

		render() {

			return html`
			<style>
				:host {
			        display: flex;
				}
			</style>
			<div class='input-element-grid-cell'>
				<div class='tc-control has-label tc-emulated-control'>
					<div class='tc-control-label'>
						${this.label}
					</div>
					<div class='tc-control-input-group with-addon-append'>
						<div class='tc-control-input-area'>
							<div class='tc-control-input-container'>
								<input type='text'
								       class='tc-control-input'
								       onChange={this.valueChange.bind(this)}
								       onBlur={this.onBlur.bind(this)}
								       onKeyPress={this.onKey.bind(this)}
								       value=${this.firstName} />
							</div>
							<div class='tc-control-input-addon-append'>
								<div class='addon-control append'>
									<span>${this.idx + 1}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`;
		}
	}
);