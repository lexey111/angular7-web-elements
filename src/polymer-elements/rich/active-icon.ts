import {html, LitElement} from '@polymer/lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import {Icons} from './icons';

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
			this.dispatchEvent(new CustomEvent(this.event, {detail: {name: event}}));
		}
	}
);