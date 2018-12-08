import '@polymer/polymer/lib/elements/dom-repeat.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import './top-menu-styles-module';

export class TopMenu extends PolymerElement {
	static get is() {
		return 'top-menu';
	}

	static get properties() {
		return {
			title: {type: String, value: 'Super app'},
			contextItems: {type: Array, value: []},
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
<style include="top-menu-styles-module">
	:host {
        display: flex;
	}
	::slotted(div) {
		display: flex;
		align-items: center;
	}
</style>

<div class="top-menu-container">
	<button class="app-switcher"
		on-click=__toggleSwitcher
		on-blur=__hideSwitcher>
			${this.logoIcon}
	</button>

	<div class="content">
		<div class$="{{__getSwitcherClass(__switcherShown)}}">
			<span class="switcher-close">&times;</span>
			<span class="switcher-title">[[title]]</span>

			<template is="dom-repeat" items="[[contextItems]]">
				<context-switcher-item url=[[item.url]] title=[[item.title]]></context-switcher-item>
			</template>

			<slot name="app-switcher-comment"></slot>
		</div>
	 </div>
	<div class="logo">[[title]]</div>

	<div class="middle-content">
		<slot name="middle-content"></slot>
	</div>
	<div class="right-content">
		<slot name="right-content"></slot>
	</div>
</div>
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
