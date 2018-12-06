import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from '@polymer/polymer/polymer-element.js';

export class UserCard extends PolymerElement {
	static get is() {
		return 'user-card';
	}

	static get properties() {
		return {
			name: {type: String, value: 'AUser'},
			firstLetter: {
				type: String,
				readOnly: true,
				computed: 'computeFirstLetter(name)'
			},
			iconBackground: {type: String, value: '#888'},
			iconColor: {type: String, value: '#fff'},
		};
	}

	public computeFirstLetter(name) {
		return name.substr(0, 1);
	}

	static get template() {
		return html`
<style include="shared-styles">
	:host {
	  display: block;
	}
</style>
<style>
	.user-card-wrapper {
		display: block;
		float: left;
        width: 310px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: var(--card-background, #eee);
        box-shadow: 0 2px 4px rgba(0,0,0,.3);
        padding: 16px;
        overflow: hidden;
        margin: 16px;
    }
	.user-card-icon {
        display: block;
        float: left;
        width: 48px;
        height: 48px;
        line-height: 48px;
        border: 4px solid var(--card-icon-border, #fff);
        border-radius: 100%;
        margin-right: 16px;
        margin-bottom: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,.2);
        background-color: #888;
	}
	.user-card-icon span {
		display: inline-block;
		font-size: 38px;
		font-weight: bold;
		width: 48px;
		text-align: center;
		text-shadow: 0 1px 0 rgba(0,0,0,.4);
		color: #fff;
	}
	.user-card-content {
        display: block;
	}
	.user-card-content p {
		font-size: .8em;
		padding-top: 8px;
		font-style: italic;
	}
</style>
	<div class="user-card-wrapper">
		<div class="user-card-icon" style="background-color: [[iconBackground]]">
			<span style="color: [[iconColor]]">[[firstLetter]]</span>
		</div>
		<div class="user-card-content external-card-content">
			Hello, [[name]]!

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				A cupiditate doloremque et illo maiores quae tempore voluptate.
				Consectetur dolore eveniet, harum illum laudantium nulla quam
				repellat similique, tempore ullam veritatis.
			</p>
		</div>
	</div>
`;
	}
}

customElements.define(UserCard.is, UserCard);
