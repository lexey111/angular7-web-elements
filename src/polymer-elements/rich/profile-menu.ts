import '@polymer/polymer/lib/elements/dom-repeat.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from '@polymer/polymer/polymer-element.js';

export class ProfileMenu extends PolymerElement {
	static get is() {
		return 'profile-menu';
	}

	static get properties() {
		return {
			items: {type: Array, value: []},
			__menuShown: {type: Boolean, value: false},
		};
	}

	static get userIcon() {
		return html`
		<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1329 784q47 14 89.5 38t89 73 79.5 115.5 55 172 22 236.5q0 154-100 263.5t-241 109.5h-854q-141
		0-241-109.5t-100-263.5q0-131 22-236.5t55-172 79.5-115.5 89-73 89.5-38q-79-125-79-272 0-104 40.5-198.5t109.5-163.5
		163.5-109.5 198.5-40.5 198.5 40.5 163.5 109.5 109.5 163.5 40.5 198.5q0 147-79 272zm-433-656q-159 0-271.5 112.5t-112.5
		271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5-112.5-271.5-271.5-112.5zm427 1536q88 0
		150.5-71.5t62.5-173.5q0-239-78.5-377t-225.5-145q-145 127-336 127t-336-127q-147 7-225.5 145t-78.5 377q0 102 62.5 173.5t150.5 71.5h854z"/></svg>
		`;
	}

	static get template() {
		return html`
	<style include="rich-ui-shared-styles-module">
		:host {
	        display: flex;
		}
		.profile-menu-button {
			position: relative;
		}
		.profile-menu-button::after {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			right: 4px;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 8px 4px 0 4px;
			border-color: rgba(255, 255, 255, .5) transparent transparent transparent;
			transition: all .2s ease;
		}
		.profile-menu-button:hover::after {
			border-color: rgba(255, 255, 255, 1) transparent transparent transparent;
		}

		.menu-content {
			position: fixed;
			display: flex;
			flex-flow: column nowrap;
			right: 0;
			top: var(--menu-size, 60px);
			background-color: var(--app-accent, #333);
			color: var(--app-accent-color, #fff);
			box-shadow: -4px 0 8px rgba(0, 0, 0, .2);
			opacity: 0;
			transform: scaleY(.01) translateY(-20px);
			transform-origin: top right;
			transition: all .2s ease;
			z-index: 10;
			pointer-events: none;
			padding: 4px;
		}
		.menu-content.active {
			transform: scaleY(1);
			opacity: 1;
			pointer-events: all;
			border-top: 2px solid rgba(255, 255, 255, .5);
		}
		.menu-content.active:after {
			content: '';
			position: absolute;
			top: -12px;
			right: 40px;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 0 6px 10px 6px;
			border-color: transparent transparent rgba(255, 255, 255, .5) transparent;
		}
	</style>

	<div class="app-profile-menu">
		<button class="profile-menu-button"
				on-click=__toggleMenu
				on-blur=__hideMenu>
			${this.userIcon}
		</button>

		<div class$="{{__getMenuClass(__menuShown)}}">
			<template is="dom-repeat" items="[[items]]">
				<context-switcher-item url=[[item.url]] title=[[item.title]]></context-switcher-item>
			</template>
		</div>
	</div>
`;
	}

	__getMenuClass(__menuShown) {
		return 'menu-content' + (__menuShown ? ' active' : '');
	}

	__toggleMenu() {
		this.__menuShown = true;
	}

	__hideMenu() {
		setTimeout(() => {
			this.__menuShown = false;
		}, 200);
	}
}

customElements.define(ProfileMenu.is, ProfileMenu);
