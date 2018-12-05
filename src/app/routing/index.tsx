import React from 'react';
import {Route, Switch} from 'react-router';
import {CustomButtonPage} from '../pages/button';
import { SideMenu } from '../ui/side-menu/side-menu';
import { NotFoundComponent } from '../pages/404';
import { HomePage } from '../pages/home';

export class AppRoutes extends React.Component {
	render() {
		return <React.Fragment>
			<SideMenu></SideMenu>

			<div id='app-page-container'>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route exact path='/index' component={HomePage}/>
					<Route exact path='/buttons' component={CustomButtonPage}/>
					<Route component={NotFoundComponent}/>
				</Switch>
			</div>
		</React.Fragment>;
	}
}
