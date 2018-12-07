import React from 'react';
import {Route, Switch} from 'react-router';
import {NotFoundComponent} from '../pages/404';
import {CustomButtonPage} from '../pages/button';
import {HomePage} from '../pages/home';
import {TCInputPage} from '../pages/input';
import {PerformancePage} from '../pages/performance';
import {PerformancePageAngular} from '../pages/performance/performance-angular';
import {PerformancePageNative} from '../pages/performance/performance-native';
import {PerformancePagePolymer} from '../pages/performance/performance-polymer';
import {PolymerPage} from '../pages/polymer';
import {SideMenu} from '../ui/side-menu/side-menu';

export class AppRoutes extends React.Component {
	render() {
		return <React.Fragment>
			<SideMenu></SideMenu>

			<div id='app-page-container'>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route exact path='/index' component={HomePage}/>
					<Route exact path='/buttons' component={CustomButtonPage}/>
					<Route exact path='/tc-input' component={TCInputPage}/>
					<Route exact path='/polymer' component={PolymerPage}/>
					<Route exact path='/performance' component={PerformancePage }/>
					<Route exact path='/performance-angular' component={PerformancePageAngular }/>
					<Route exact path='/performance-polymer' component={PerformancePagePolymer }/>
					<Route exact path='/performance-native' component={PerformancePageNative }/>
					<Route component={NotFoundComponent}/>
				</Switch>
			</div>
		</React.Fragment>;
	}
}
