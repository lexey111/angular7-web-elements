import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from '@polymer/polymer/polymer-element.js';

export class ContextSwitcherItem extends PolymerElement {
	static get is() {
		return 'context-switcher-item';
	}

	static get properties() {
		return {
			title: {type: String, value: '---'},
			url: {type: String, value: '-#-'},
		};
	}

	static get template() {
		return html`
	<style include="rich-ui-shared-styles-module">
		:host {
	        display: flex;
		}
	</style>

	<div class="app-switcher-item" tabindex=1 on-click=__gotoUrl>
		[[title]]
	</div>
`;
	}

	__gotoUrl() {
		console.log('Open page', this.url);
	}
}

customElements.define(ContextSwitcherItem.is, ContextSwitcherItem);
