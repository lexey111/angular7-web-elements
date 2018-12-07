import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';


import '../styles/app.less';
import '../styles/rich-ui.less';

console.log('[React app starts]');

const runApp = () => {
	ReactDOM.render(
		<App></App>,
		document.getElementById('app-mount-point')
	);
};

runApp();