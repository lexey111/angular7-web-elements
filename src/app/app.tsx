import React from 'react';

export class App extends React.Component {
	componentDidMount() {
		if (window['doVanilla']) {
			window['doVanilla']();
		}
	}

	render() {
		return <div id='app-container'>
			<div className='app-header'>
				Angular 7 Web Elements Demo page. This is React application.
			</div>

			<div className='app-content'>
				<p>
					This is <code>custom-button</code> web element from angular:
				</p>
				<custom-button label='First Value' hidden></custom-button>
				<p>
					Click handling attached to the button works from VanillaJS.
				</p>
			</div>
		</div>;
	}
}
