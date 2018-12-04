window.doVanilla = function () {
	console.log('[Vanilla loaded]');


	const button = document.querySelector('custom-button');
	if (!button) {
		console.log('Trying to attach to the button...Error: button not found!');
		return;
	}
	console.log('Trying to attach to the button... done.');
	console.log('Click to the button to see evemt handling.');


	button.hidden = false;


	button.addEventListener('action', (event) => {
		console.log(`"action" emitted: ${event.detail}`);

		if (event.detail === 1) {
			button.label = 'Second Value';
		}
		if (event.detail === 2) {
			button.label = 'Third Value';
		}
		if (event.detail > 2) {
			button.label = `Other Value: ${event.detail}`;
		}
	});
};