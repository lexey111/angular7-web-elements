~ function () {
	console.log('Attached to button');

	const button = document.querySelector('custom-button');
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
}();