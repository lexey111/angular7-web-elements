import {html, LitElement} from '@polymer/lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

const Icons = {
	home: `
		<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62
		74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14
		9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"/></svg>
		`,
	display: `
		<svg width="2048" height="1792" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1792 1248v-960q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zm128-960v960q0
		 66-47 113t-113 47h-736v128h352q14 0 23 9t9 23v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-128h-736q-66 0-113-47t-47-113v-960q0-66
		  47-113t113-47h1600q66 0 113 47t47 113z"/></svg>
		`,
};

customElements.define('top-icon', class extends LitElement {
		static get properties() {
			return {
				icon: {type: String, value: 'home'},
				event: {type: String, value: 'home_clicked'}
			};
		}

		render() {
			const svgString = Icons[this.icon];

			return html`
			<style include="rich-ui-shared-styles-module">
				:host {
			        display: flex;
				}
				.top-menu-icon {
					display: flex;
					align-content: center;
					justify-content: center;
					align-items: center;
					width: var(--menu-size, 60px);
					height: var(--menu-size, 60px);
					opacity: .9;
					transition: opacity .2s ease;
					cursor: pointer;
					border: none;
					background: none;
					outline: none;
					-ms-touch-action: manipulation;
					touch-action: manipulation;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					 user-select: none;
				}
				.top-menu-icon svg{
					width: calc(var(--menu-size, 60px) * .6);
					height: calc(var(--menu-size, 60px) * .6);
					fill: var(--app-accent-color, #fff);
					transition: all .2s ease;
				}
				.top-menu-icon svg{
					width: calc(var(--menu-size, 60px) * .5);
					height: calc(var(--menu-size, 60px) * .5);
				}
				.top-menu-icon:hover {
					opacity: 1;
				}

			</style>

			<div class="top-menu-icon"
				@click=${this.__doClick}>
					${unsafeHTML(svgString)}
			</div>`;
		}

		__doClick() {
			console.log('clicked!', this.event);
			this.dispatchEvent(new CustomEvent(this.event, {detail: {name: event}}));
		}
	}
);

window.try = (e) => alert(e);