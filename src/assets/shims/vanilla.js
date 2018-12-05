window.doVanilla = function () {
	console.log('[Vanilla JS script loaded]');


	const buttons = document.querySelectorAll('custom-button');
	if (!buttons || !buttons.length) {
		console.log('Trying to attach to the buttons...Error: buttons not found!');
		return;
	}
	console.log('  Trying to attach to the buttons... done.');
	console.log('  Click to the button to see event handling.');

	for (var i = 0; i < buttons.length; i++) {
		(function (i) {
			var button = buttons[i];
			button.hidden = false;

			button.addEventListener('action', function (event) {
				console.log('Event:', event.detail);

				if (event.detail === 1) {
					button.label = 'Second Value';
				}
				if (event.detail === 2) {
					button.label = 'Third Value';
				}
				if (event.detail > 2) {
					button.label = 'Other Value: ' + event.detail;
				}
			});
		})(i);
	}
};