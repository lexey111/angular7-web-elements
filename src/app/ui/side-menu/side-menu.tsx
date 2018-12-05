import React from 'react';
import {NavLink} from 'react-router-dom';

export class SideMenu extends React.Component {
	render() {
		return <div className='app-side-menu'>
			<div className='section-header'>
				React application
			</div>
			<div className='app-side-menu-items'>
				<NavLink to='index'>Home</NavLink>
				<NavLink to='buttons'>Custom button</NavLink>
			</div>
		</div>;
	}
}