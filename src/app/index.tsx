import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

import '../assets/app.less';

console.log('app main file');

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