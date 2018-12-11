import {html, LitElement} from '@polymer/lit-element';
// import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

customElements.define('pm-input-text', class extends LitElement {
	static get properties() {
		return {
			label: {type: String, value: 'Label'},
			firstName: {type: String, value: ''},
			secondName: {type: String, value: ''},
			idx: {type: Number, value: 0},
		};
	}

	render() {

		return html`
		<style>
			:host {
		        display: flex;
			}
			.tc-control {
			  position: relative;
			  display: flex;
			  flex-flow: column nowrap;
			  align-content: center;
			  align-items: center;
			  justify-content: flex-start;
			}
			.tc-control.has-label .tc-control-label {
			  display: flex;
			}
			.tc-control.focused .addon-control.append > SPAN,
			.tc-control.focused .addon-control.append DIV,
			.tc-control.focused .addon-control.append BUTTON {
			  border-left-color: #66AFE9;
			  color: #000;
			  background-color: #FFF;
			  box-shadow: 0 0 0 0.2rem rgba(102, 175, 233, 0.3);
			  outline: none;
			  z-index: 0;
			}
			.tc-control.focused .addon-control.append > SPAN:hover,
			.tc-control.focused .addon-control.append DIV:hover,
			.tc-control.focused .addon-control.append BUTTON:hover {
			  color: #000;
			  border-color: #66AFE9;
			  background-color: #FFF;
			  box-shadow: 0 0 0 0.2rem rgba(102, 175, 233, 0.3);
			}
			.tc-control:not(:first-child) {
			  margin-top: 0.5rem;
			}
			.tc-control:not(:first-child).has-label {
			  margin-top: 1rem;
			}
			.tc-control .tc-control-input-group {
			  display: flex;
			  flex-flow: column nowrap;
			  width: 100%;
			}
			.tc-control .tc-control-input-group.with-addon-append .tc-control-input {
			  border-right: none;
			  border-top-right-radius: 0;
			  border-bottom-right-radius: 0;
			}
			.tc-control INPUT {
			  width: 100%;
			}
			.tc-control INPUT[disabled] {
			  background-color: #e9ecef;
			  border-color: #cbd3da;
			  color: #AAA;
			}
			.tc-control .tc-control-label {
			  display: none;
			  font: normal 12px/28px 'Verdana', 'Arial', sans-serif;
			  color: #838788;
			  align-self: flex-start;
			  align-items: center;
			}
			.tc-control .tc-control-input {
			  padding: 0 6px;
			  border: 1px solid #CCC;
			  color: #222;
			  background-color: #f8f9fa;
			  border-radius: 0.25rem;
			  height: 28px;
			  font: normal 12px/1.3 'Verdana', 'Arial', sans-serif;
			  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
			}
			.tc-control .tc-control-input:active,
			.tc-control .tc-control-input:focus {
			  color: #000;
			  border-color: #66AFE9;
			  background-color: #FFF;
			  box-shadow: 0 0 0 0.2rem rgba(102, 175, 233, 0.3);
			  outline: none;
			}
			.tc-control .tc-control-input:active:hover,
			.tc-control .tc-control-input:focus:hover {
			  color: #000;
			  border-color: #66AFE9;
			  background-color: #FFF;
			  box-shadow: 0 0 0 0.2rem rgba(102, 175, 233, 0.3);
			}
			.tc-control .tc-control-input:hover {
			  color: #222;
			  border-color: #93c6ef;
			  background-color: #e9ecef;
			}
			.tc-control .tc-control-input-container {
			  display: flex;
			  flex-flow: row nowrap;
			  flex-grow: 2;
			}
			.tc-control .tc-control-input-area {
			  display: flex;
			  flex-flow: row nowrap;
			}
			.tc-control .tc-control-input-addon-append,
			.tc-control .tc-control-input-inline {
			  display: flex;
			  flex-flow: row nowrap;
			  align-self: flex-start;
			  align-items: center;
			}
			.tc-control .inline-control,
			.tc-control .addon-control {
			  display: flex;
			  height: 28px;
			  align-items: center;
			}
			.tc-control .inline-control BUTTON {
			  margin: 0 0 0 4px;
			}
			.tc-control .inline-control A {
			  margin: 0 12px;
			}
			.tc-control .addon-control.append > SPAN,
			.tc-control .addon-control.append DIV,
			.tc-control .addon-control.append BUTTON {
			  padding: 0 0.5rem;
			  transition: all 0.15s ease-in-out;
			}
			.tc-control .addon-control.append > SPAN,
			.tc-control .addon-control.append DIV {
			  width: 32px;
			  text-align: center;
			  display: flex;
			  align-items: center;
			  align-content: center;
			  justify-items: center;
			  justify-content: center;
			  white-space: nowrap;
			  font-family: monospace, monospace;
			  font-size: 12px;
			  height: 100%;
			  line-height: 1;
			  margin-top: 2px;
			  border: solid 1px #CCC;
			  background-color: #e9ecef;
			  border-top-right-radius: 0.25rem;
			  border-bottom-right-radius: 0.25rem;
			}
			.tc-control .addon-control.append > BUTTON {
			  border-top-left-radius: 0;
			  border-bottom-left-radius: 0;
			}
			.tc-control BUTTON {
			  height: 100%;
			  line-height: 1;
			}
			.input-element-grid-cell {
				min-width: 20%;
				overflow: hidden;
			}
		</style>

		<div class='tc-control'>
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
								       @input=${this.valueChange}
								       @blur=${this.onBlur}
								       @keypress=${this.onKey}
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
		</div>
`;
	}

	valueChange(event) {
		console.log(`onChange [${this.idx + 1}]:`, event.target.value);
		this.firstName = event.target.value;
		this.label = event.target.value + ' ' + this.secondName;
	}

	commitChanges() {
		console.log('[component] do commit!', this.firstName);
		this.dispatchEvent(new CustomEvent('commit', {detail: this.firstName}));
	}

	onBlur() {
		this.commitChanges();
	}

	onKey(event) {
		if (!event || event.key !== 'Enter') {
			return;
		}
		this.commitChanges();
	}
});