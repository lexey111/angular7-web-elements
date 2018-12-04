import React from 'react';

export class App extends React.Component {
	componentDidMount() {
		if (window.doVanilla) {
			window.doVanilla();
		}
	}

	render() {
		// @ts-ignore for the line
		return <div id='app-container'>
			<header>
				Angular 7 Web Elements Demo page
			</header>

			<div class='main-content'>
				<custom-button label='First Value' hidden='true'></custom-button>
			</div>
		</div>;
	}
}
