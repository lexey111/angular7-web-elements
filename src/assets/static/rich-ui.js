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
	]
};

window.onload = function () {
	console.log('- Page ready.');

	document.querySelector('top-menu').contextItems = data.contextSwitchItems;
	document.querySelector('profile-menu').items = data.profileMenuItems;

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