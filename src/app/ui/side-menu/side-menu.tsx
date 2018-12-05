import React from 'react';
import {NavLink} from 'react-router-dom';

export class SideMenu extends React.Component {
	render() {
		return <div className='app-side-menu'>
			<div className='section-header'>
				React application
			</div>
			<div className='app-side-menu-items'>
				<NavLink to='/index' activeClassName='selected'>Home</NavLink>
				<NavLink to='/buttons' activeClassName='selected'>Custom button</NavLink>
				<NavLink to='/tc-input' activeClassName='selected'>Text input</NavLink>
			</div>
		</div>;
	}
}