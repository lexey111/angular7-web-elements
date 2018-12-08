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
	sales: `
		<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1408 256h-1024v1242l423-406 89-85 89 85 423 406v-1242zm12-128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48
		 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62v-1289q0-34 19.5-62t52.5-41q21-9 44-9h1048z"/></svg>
		`,
	money: `
		<svg width="2048" height="1792" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M832 1152h384v-96h-128v-448h-114l-148 137 77 80q42-37 55-57h2v288h-128v96zm512-256q0 70-21 142t-59.5 134-101.5 101-138
		 39-138-39-101.5-101-59.5-134-21-142 21-142 59.5-134 101.5-101 138-39 138 39 101.5 101 59.5 134 21 142zm512 256v-512q-106 0-181-75t-75-181h-1152q0
		  106-75 181t-181 75v512q106 0 181 75t75 181h1152q0-106 75-181t181-75zm128-832v1152q0 26-19 45t-45 19h-1792q-26
		   0-45-19t-19-45v-1152q0-26 19-45t45-19h1792q26 0 45 19t19 45z"/></svg>
		`,
	cloud: `
		<svg width="2048" height="1792" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1984 1152q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-132 71-241.5t187-163.5q-2-28-2-43 0-212 150-362t362-150q158
		 0 286.5 88t187.5 230q70-62 166-62 106 0 181 75t75 181q0 75-41 138 129 30 213 134.5t84 239.5z"/></svg>
		`,
	report: `
		<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19
		 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79
		  56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"/></svg>
		`,
	document: `
		<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76
		 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280z"/></svg>
		`,
	customer: `
		<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M896 622l201 306h-402zm365 530h94l-459-691-459 691h94l104-160h522zm403-256q0 209-103 385.5t-279.5 279.5-385.5
		 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>
		`,
	bank: `
		<svg width="2048" height="1792" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704
		 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5
		 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"/></svg>
		`,
};

customElements.define('active-icon', class extends LitElement {
		isOpen = false;

		static get properties() {
			return {
				icon: {type: String, value: 'home'},
				small: {type: Boolean, value: false},
				title: {type: String, value: ''},
				notifications: {type: Array, value: []},
				event: {type: String, value: 'home_clicked'},
				isOpen: {type: Boolean, value: false},
			};
		}

		render() {
			let svgString = `<div class="active-icon-icon ${this.small ? 'small' : ''}">${Icons[this.icon] || ''}</div>`;
			if (this.title) {
				svgString += `<div class="active-icon-title">${this.title}</div>`;
			}

			return html`
			<style include="active-icon-styles-module">
				:host {
			        display: flex;
				}
				.active-menu-icon {
					display: flex;
					height: var(--menu-size, 60px);
					opacity: .8;
					transition: all .2s ease;
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
					 position: relative;
					 padding: 0;
					 margin: 0;
				}
				.active-menu-icon:focus {
					opacity: 1;
				}
				.active-icon-icon {
					width: var(--menu-size, 60px);
					height: var(--menu-size, 60px);
					display: flex;
					align-items: center;
					justify-items: center;
					justify-content: center;
				}
				.active-icon-icon svg{
					width: calc(var(--menu-size, 60px) * .6);
					height: calc(var(--menu-size, 60px) * .6);
					fill: var(--app-accent-color, #fff);
					transition: all .2s ease;
				}
				.active-icon-icon.small svg{
					width: calc(var(--menu-size, 60px) * .5);
					height: calc(var(--menu-size, 60px) * .5);
					opacity: .8;
				}
				.active-menu-icon:hover {
					opacity: 1;
				}
				.active-menu-icon.with-title {
					width: 100%;
					transition: all .2s ease;
				}
				.active-menu-icon.with-title:hover {
					background-color: rgba(255, 255, 255, .3);
				}
				.active-icon-title {
					height: var(--menu-size, 60px);
					white-space: nowrap;
					font-size: 16px;
					display: flex;
					align-items: center;
					justify-items: center;
					justify-content: center;
					padding: 0 16px 0 0;
					color: var(--app-accent-color, #fff);
				}
				.active-menu-icon-badge {
					position: absolute;
					top: calc(var(--menu-size, 60px) * .4 - 12px);
					left: calc(var(--menu-size, 60px) * .4 + 12px);
					font-size: 11px;
					background-color: #ffc400;
					border: 2px solid #fff;
					color: #653b09;
					padding: 2px 4px;
					border-radius: 16px;
					box-shadow: 0 2px 4px rgba(0, 0, 0, .5);
				}
				.active-icon-dropdown {
					position: fixed;
					top: var(--menu-size, 60px);
					margin-top: -8px;
					right: 5px;
					width: 300px;
					background-color: #fff;
					color: #333;
					pointer-events: none;
					z-index: 11;
					transition: all .2s ease;
					opacity: 1;
				}
				.active-icon-dropdown.active {
					pointer-events: all;
					box-shadow: 0 4px 8px rgba(0, 0, 0, .4);
					padding: 16px;
					text-align: left;
				}
				.active-icon-dropdown ul {
					list-style: none;
					padding: 0;
					margin: 0;
				}
				.active-icon-dropdown ul li {
					white-space: nowrap;
					min-height: 32px;
					padding: 2px 4px 2px 12px;
					font-size: 13px;
					border-left: 6px solid transparent;
					margin: 4px 0;
				}
				.active-icon-dropdown ul li div {
					display: block;
					float: none;
					padding: 0;
					margin: 0;
					font-weight: bold;
				}
				.active-icon-dropdown ul li p {
					display: block;
					float: none;
					font-size: 11px;
					opacity: .5;
					padding: 4px 0;
					line-height: 1em;
					margin: 0;
				}
				.active-icon-dropdown ul li.error {
					border-color: orangered;
				}
				.active-icon-dropdown ul li.warning {
					border-color: darkorange;
				}
				.active-icon-dropdown ul li.info {
					border-color: dodgerblue;
				}

			</style>

			<button class="active-menu-icon ${this.title ? 'with-title' : ''}" tabindex="1"
				@focus=${this.__openDropdown}
				@blur=${this.__closeDropdown}
				@click=${this.__doClick}>
					${unsafeHTML(svgString)}
					${this.notifications && this.notifications.length ? html`<span class="active-menu-icon-badge">${this.notifications.length}</span>` : ''}
					${this.renderItems()}
			</button>`;
		}

		renderItems() {
			const itemTemplates = [];

			if (this.notifications && this.notifications.length && this.isOpen) {
				for (const i of this.notifications) {
					itemTemplates.push(
						html`
							<li class="${i.type}">
								<div>${i.text}</div>
								<p>${i.subtext}</p>
							</li>
						`);
				}
			}
			const extraClass = this.isOpen ? 'active' : '';

			return html`
				<div class="active-icon-dropdown ${extraClass}">
					${itemTemplates.length ? html`<ul>${itemTemplates}</ul>` : ''}
				</div>
			`;
		}

		__closeDropdown() {
			this.isOpen = false;
		}

		__openDropdown() {
			if (this.notifications && this.notifications.length) {
				this.isOpen = true;
			}
		}

		__doClick() {
			if (this.notifications && this.notifications.length) {
				return;
			}
			console.log('clicked!', this.event);
			this.dispatchEvent(new CustomEvent(this.event, {detail: {name: event}}));
		}
	}
);