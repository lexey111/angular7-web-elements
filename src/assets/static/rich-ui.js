const data = {
	contextSwitchItems: [
		{
			title: 'Super Application',
			url: 'http://super-application.com'
		},
		{
			title: 'Financial reports',
			url: 'http://financial-reports.com'
		},
		{
			title: 'Bank accounts',
			url: 'http://bank-accounts.com'
		},
		{
			title: 'Expenses',
			url: 'http://expenses.com'
		},
		{
			title: 'Automatic invoices',
			url: 'http://auto-invoices.com'
		},
	],
};

window.onload = function () {
	console.log('Page ready');
	document.querySelector('top-menu').contextItems = data.contextSwitchItems;
};