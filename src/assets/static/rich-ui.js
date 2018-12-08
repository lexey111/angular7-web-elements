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
	]
};

window.onload = function () {
	console.log('Page ready');

	document.querySelector('top-menu').contextItems = data.contextSwitchItems;
	document.querySelector('profile-menu').items = data.profileMenuItems;
	console.log('assign:', document.querySelector('top-menu'), data.contextSwitchItems);

	document.querySelector('top-icon').addEventListener('home_clicked', function () {
		console.log('Home icon clicked');
	});
};