import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from '@polymer/polymer/polymer-element.js';

export class SearchInput extends PolymerElement {
	static get is() {
		return 'search-input';
	}

	static get properties() {
		return {
			placeholder: {type: String, value: 'Search...'},
		};
	}

	static get template() {
		return html`
	<style include="rich-ui-shared-styles-module">
		:host {
	        display: flex;
		}
		.app-search-item {
			position: relative;
		}
		.app-search-item input {
			border: none;
			outline: none;
			height: 30px;
			min-width: 300px;
			opacity: .8;
			border-radius: 25px;
			padding: 0 12px;
			font-size: 14px;
			color: var(--app-accent, #444);
			transition: all .2s ease;
		}
		.app-search-item input:focus {
			min-width: 450px;
			opacity: 1;
		}
		.search-icon {
			width: 18px;
			height: 18px;
			position: absolute;
			right: 10px;
			top: 50%;
			margin-top: -9px;
		}
		.search-icon svg {
			width: 18px;
			height: 18px;
			fill: var(--app-accent, #ccc);
			opacity: .5;
		}
	</style>

	<div class="app-search-item">
		<input type="text" placeholder=[[placeholder]] />
		<span class="search-icon">
		<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
			<path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5
			131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5
			55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"/></svg>
		</span>
	</div>
`;
	}
}

customElements.define(SearchInput.is, SearchInput);
