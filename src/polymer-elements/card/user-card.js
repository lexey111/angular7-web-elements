import {html, LitElement} from '@polymer/lit-element';

class UserCard extends LitElement {
	constructor() {
		super();
		this.name = 'User';
		this.background = '#888';
		this.color = '#fff';
		this.extraClass = '';
	}

	static get properties() {
		return {
			name: {type: String},
			extraClass: {type: String},
			color: {type: String},
			background: {type: String}
		};
	}

	render() {
		const firstLetter = this.name.substr(0, 1);
		return html`
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
        background-color: ${this.background};
        border: 4px solid #fff;
        border-radius: 100%;
        margin-right: 16px;
        box-shadow: 0 2px 4px rgba(0,0,0,.2);
	}
	.user-card-icon span {
		display: inline-block;
		font-size: 38px;
		font-weight: bold;
		width: 48px;
        color: ${this.color};
		text-align: center;
		text-shadow: 0 1px 0 rgba(0,0,0,.4);
	}
	.user-card-content {
        display: block;
	}
	.user-card-content p {
		font-size: .8em;
		padding-top: 8px;
		font-style: italic;
	}
	.user-card-divider {
		color: var(--divider-color, #ccc);
		border-color: var(--divider-color, #ccc);
	}
</style>
	<div class="user-card-wrapper ${this.extraClass}">
		<div class="user-card-icon" style="background-color: ${this.background}"><span>${firstLetter}</span></div>
		<div class="user-card-content">
			Hello, ${this.name}!
			<hr class="user-card-divider" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				A cupiditate doloremque et illo maiores quae tempore voluptate. 
				Consectetur dolore eveniet, harum illum laudantium nulla quam 
				repellat similique, tempore ullam veritatis.
			</p>
		</div>
	</div>
`;
	}
}

customElements.define('user-card', UserCard);

