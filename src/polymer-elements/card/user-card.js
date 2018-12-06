import {html, LitElement} from '@polymer/lit-element';

class UserCard extends LitElement {
	constructor() {
		super();
		this.name = 'User';
	}

	static get properties() {
		return {
			name: {type: String}
		};
	}

	render() {
		return html`
<style>
  p {
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
  }
</style>

	<p>Hello, ${this.name}!</p>
`;
	}
}

customElements.define('user-card', UserCard);

