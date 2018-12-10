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
		.app-switcher-item {
			display: flex;
			height: var(--menu-size, 60px);
			width: var(--app-switcher-size, 300px);
			padding: 0 20px;
			align-self: flex-start;
			align-content: center;
			align-items: center;
			cursor: pointer;
			transition: all .2s ease;
		}
		.app-switcher-item:hover {
			background-color: rgba(255,255,255,.3);
		}
	</style>

	<div class="app-switcher-item" tabindex=1 on-click=__gotoUrl>
		[[title]]
	</div>
`;
	}

	__gotoUrl() {
		console.log('Open page', this.url);
		if (!this.url.fake) {
			window.location.href = this.url;
		}
	}
}

customElements.define(ContextSwitcherItem.is, ContextSwitcherItem);
