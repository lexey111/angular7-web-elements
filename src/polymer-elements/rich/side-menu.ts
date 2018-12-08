import '@polymer/polymer/lib/elements/dom-repeat.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import './side-menu-styles-module';

export class SideMenu extends PolymerElement {
	static get is() {
		return 'side-menu';
	}

	static get properties() {
		return {
			__menuShown: {type: Boolean, value: false},
			items: {type: Array, value: []}
		};
	}

	static get openIcon() {
		return html`
		<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466
		 466q10 10 10 23z"/></svg>
		`;
	}

	static get template() {
		return html`
	<style include="side-menu-styles-module">
		:host {
	        display: flex;
		}

	</style>

	<div class$="{{__getMenuContainerClass(__menuShown)}}">
		<button class="side-menu-button"
				on-click=__toggleMenu
				on-blur=__hideMenu>
			${this.openIcon}
		</button>
		<div class$="{{__getMenuClass(__menuShown)}}">
			<template is="dom-repeat" items="[[items]]">
				<active-icon icon=[[item.icon]] title$="{{__getMenuTitle(__menuShown, item)}}" small="true"></active-icon>
			</template>

		</div>
	</div>
`;
	}

	__getMenuTitle(__menuShown, item) {
		return __menuShown ? item.title : '';
	}

	__getMenuContainerClass(__menuShown) {
		return 'side-menu-container' + (__menuShown ? ' active' : '');
	}

	__getMenuClass(__menuShown) {
		return 'side-menu-content' + (__menuShown ? ' active' : '');
	}

	__toggleMenu() {
		this.__menuShown = !this.__menuShown;
	}

	__hideMenu() {
		setTimeout(() => {
			this.__menuShown = false;
		}, 200);
	}
}

customElements.define(SideMenu.is, SideMenu);
