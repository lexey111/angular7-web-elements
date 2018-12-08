const data = {
	contextSwitchItems: [
		{
			title: 'Web elements demo',
			url: './index'
		},
		{
			title: 'Pure HTML demo',
			url: './index_pure.html'
		},
		{
			title: 'Bank accounts',
			url: 'http://bank-accounts.com',
			fake: true
		},
		{
			title: 'Expenses',
			url: 'http://expenses.com',
			fake: true
		},
		{
			title: 'Automatic invoices',
			url: 'http://auto-invoices.com',
			fake: true
		},
	],
	profileMenuItems: [
		{
			title: 'Profile...',
			url: '/profile',
			fake: true
		},
		{
			title: 'Change password',
			url: '/password',
			fake: true
		},
		{
			title: 'Switch company',
			url: '/switch',
			fake: true
		},
		{
			title: 'Log out',
			url: '/logout',
			fake: true
		},
	],
	notifications: [
		{type: 'warning', text: 'Something going to be wrong...', subtext: 'Please check everything'},
		{type: 'info', text: 'All right yet, but it is not a time to relax', subtext: 'Please be careful'},
		{type: 'info', text: 'Nothing changes', subtext: 'Be quiet'},
		{type: 'info', text: 'Data loaded', subtext: 'Processing age going'},
		{type: 'error', text: 'Invalid salary', subtext: 'Please increase'},
	],
	sideMenuItems: [
		{icon: 'cloud', title: 'Data sharing'},
		{icon: 'sales', title: 'Sales'},
		{icon: 'money', title: 'Invoices'},
		{icon: 'customer', title: 'Customers'},
		{icon: 'document', title: 'Articles'},
		{icon: 'report', title: 'Reports'},
		{icon: 'bank', title: 'Banks'}
	]
};

window.onload = function () {
	console.log('- Page ready.');

	document.querySelector('top-menu').contextItems = data.contextSwitchItems;
	document.querySelector('profile-menu').items = data.profileMenuItems;
	document.querySelector('side-menu').items = data.sideMenuItems;

	console.log('- Data assigned.');

	document.querySelector('#home-icon').addEventListener('home_clicked', function () {
		alert('Home icon clicked');
	});

	console.log('- Listeners ready.');

	setTimeout(function () {
		document.querySelector('#display-icon').notifications = data.notifications;
		console.log('- Notifications assigned.');
	}, 200);
};

window.addEventListener('WebComponentsReady', function () {
	console.log('- WebComponents ready.');
	document.querySelector('vaadin-grid').items = [
		{name: {first: 'Alex', last: 'Cross'}, location: {city: 'Kyiv'}, visitCount: 42}
	];

	/*
	 * Each object in the above "users" array follows the same structure:
	 * {
	 *   "name": {
	 *     "first": "Laura",
	 *     "last": "Arnaud",
	 *     ...
	 *   },
	 *   "location": {
	 *     "city": "Perpignan"
	 *     ...
	 *   }
	 *   ...
	 * }
	 */
});