import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from '@polymer/polymer/polymer-element.js';

export class TopMenu extends PolymerElement {
	static get is() {
		return 'top-menu';
	}

	static get properties() {
		return {
			title: {type: String, value: 'Super app'},
			__switcherShown: {type: Boolean, value: false},
		};
	}

	static get logoIcon() {
		return html`
		<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
			<path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40
			0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40
			0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68
			28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40
			28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640
			512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40
			0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"/>
		</svg>
		`;
	}

	static get template() {
		return html`
	<style include="rich-ui-shared-styles-module">
		:host {
	        display: flex;
		}
	</style>

	<div class="app-switcher" tabindex=1
		on-click=__toggleSwitcher
		on-blur=__hideSwitcher>
			${this.logoIcon}
	</div>

	<div class="content">
		<div class$="{{__getSwitcherClass(__switcherShown)}}">
			<span class="switcher-close">&times;</span>
			<slot name="switcher-content"></slot>
		</div>
	 </div>
	<div class="logo">[[title]]</div>
`;
	}

	__getSwitcherClass(__switcherShown) {
		return 'switcher-content' + (__switcherShown ? ' active' : '');
	}

	__toggleSwitcher() {
		this.__switcherShown = !this.__switcherShown;
	}

	__hideSwitcher() {
		setTimeout(() => {
			this.__switcherShown = false;
		}, 200);
	}
}

customElements.define(TopMenu.is, TopMenu);
