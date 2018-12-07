import React from 'react';
import {NavLink} from 'react-router-dom';

export class SideMenu extends React.Component {
	render() {
		return <div className='app-side-menu'>
			<div className='section-header'>
				<img src='assets/images/react.svg' alt='logo'/>
				React host
			</div>

			<div className='app-side-menu-items'>

				<NavLink to='/index' activeClassName='selected'>Intro</NavLink>

				<div className='app-side-menu-item-group'>
					<header>Angular</header>
					<NavLink to='/buttons' activeClassName='selected'>Custom button</NavLink>
					<NavLink to='/tc-input' activeClassName='selected'>Text input</NavLink>
				</div>

				<div className='app-side-menu-item-group'>
					<header>Polymer</header>
					<NavLink to='/polymer' activeClassName='selected'>Polymer</NavLink>
				</div>

				<div className='app-side-menu-item-group'>
					<header>Performance &amp; Overhead</header>
					<NavLink to='/performance' activeClassName='selected'>Summary</NavLink>

					<div className='app-side-menu-item-subgroup'>
						<NavLink to='/performance-angular' activeClassName='selected'>Angular: inputs</NavLink>
						<NavLink to='/performance-inputs-native' activeClassName='selected'>React: inputs</NavLink>
						<NavLink to='/performance-polymer' activeClassName='selected'>Polymer: cards</NavLink>
						<NavLink to='/performance-cards-native' activeClassName='selected'>React: cards</NavLink>
					</div>
				</div>
			</div>
		</div>;
	}
}