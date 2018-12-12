import React from 'react';
import {Route, Switch} from 'react-router';
import {NotFoundComponent} from '../pages/404';
import {CustomButtonPage} from '../pages/button';
import {HomePage} from '../pages/home';
import {TCInputPage} from '../pages/input';
import {PerformancePage} from '../pages/performance';
import {PerformancePageCardsAngular} from '../pages/performance/performance-cards-angular';
import {PerformancePageAngular} from '../pages/performance/performance-inputs-angular';
import {PerformancePageNative} from '../pages/performance/performance-cards-native';
import {PerformancePageReactInputs} from '../pages/performance/performance-inputs-native';
import {PerformancePagePolymerInputs} from '../pages/performance/performance-inputs-polymer';
import {PerformancePagePolymer} from '../pages/performance/performance-cards-polymer';
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
					<Route exact path='/performance' component={PerformancePage}/>
					<Route exact path='/performance-inputs-angular' component={PerformancePageAngular}/>
					<Route exact path='/performance-inputs-polymer' component={PerformancePagePolymerInputs}/>
					<Route exact path='/performance-inputs-native' component={PerformancePageReactInputs}/>
					<Route exact path='/performance-cards-polymer' component={PerformancePagePolymer}/>
					<Route exact path='/performance-cards-native' component={PerformancePageNative}/>
					<Route exact path='/performance-cards-angular' component={PerformancePageCardsAngular}/>

					<Route component={NotFoundComponent}/>
				</Switch>
			</div>
		</React.Fragment>;
	}
}
