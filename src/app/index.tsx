import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

import '../styles/app.less';

console.log('[React app start]');

const runApp = () => {
	ReactDOM.render(
		<App></App>,
		document.getElementById('app-mount-point')
	);
};

runApp();

// Hot reloading
if ((module as any).hot) {
	(module as any).hot.accept('./App', () => {
		runApp();
	});
}