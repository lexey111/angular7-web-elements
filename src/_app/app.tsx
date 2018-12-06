import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AppRoutes} from './routing';

export class App extends React.Component {
	render() {
		return <React.Fragment>
			<BrowserRouter>
				<AppRoutes></AppRoutes>
			</BrowserRouter>
		</React.Fragment>;
	}
}
