const globalData = {
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
	],
	users: []
};

function updateNotifications(record) {
	document.querySelector('#display-icon').notifications = globalData.notifications;
	if (!record) {
		return;
	}
	setTimeout(function () {
		globalData.notifications.push(record);
		document.querySelector('#display-icon').notifications = [].concat(globalData.notifications);
	}, 500);
}

window.onload = function () {
	console.log('- Page ready.');

	document.querySelector('top-menu').contextItems = globalData.contextSwitchItems;
	document.querySelector('profile-menu').items = globalData.profileMenuItems;
	document.querySelector('side-menu').items = globalData.sideMenuItems;
	document.querySelector('#half-marathon').selected = true;

	console.log('- Data and state assigned.');

	document.querySelector('#home-icon').addEventListener('home_clicked', function () {
		alert('Home icon clicked');
	});

	console.log('- Listeners ready.');
	document.querySelector('#display-icon').notifications = globalData.notifications;
	console.log('- Notifications assigned.');

	setTimeout(function () {
		updateNotifications({type: 'info', text: 'Just a message', subtext: 'Why not?'});
	}, 2000);

	console.log('- Prepare Vaadin.');

	const dialog = document.querySelector('vaadin-dialog');
	dialog.renderer = function (root, dialog) {
		// Check if there is a DOM generated with the previous renderer call to update its content instead of recreation
		if (root.firstElementChild) {
			return;
		}
		const div = window.document.createElement('div');
		div.textContent = 'Are you sure?';

		const br = window.document.createElement('br');

		const okButton = window.document.createElement('vaadin-button');
		okButton.setAttribute('theme', 'primary');
		okButton.textContent = 'OK';
		okButton.setAttribute('style', 'margin-right: 1em');
		okButton.addEventListener('click', function () {
			dialog.opened = false;
		});

		const cancelButton = window.document.createElement('vaadin-button');
		cancelButton.textContent = 'Cancel';
		cancelButton.addEventListener('click', function () {
			dialog.opened = false;
		});

		root.appendChild(div);
		root.appendChild(br);
		root.appendChild(okButton);
		root.appendChild(cancelButton);
	};

	document.querySelector('vaadin-button').addEventListener('click', function () {
		dialog.opened = true;
	});

	document.querySelector('#show-dialog').addEventListener('click', function (e) {
		window.console.log(e.target.id + ' clicked');
	});

	document.querySelector('#grid-tabs').addEventListener('selected-changed', function (e) {
		var tabIdx = e.detail.value;
		var cities = ['', 'Amsterdam', 'Kyiv', 'London', 'Paris', 'Puna'];
		window.console.log('Set filter: ', tabIdx ? cities[tabIdx] : 'All');
		document.querySelector('vaadin-grid').items = globalData.users.filter(function (user) {
			if (tabIdx === 0) {
				return user;
			}
			return user.location.city === cities[tabIdx];
		});
	});

	console.log('- Dialog and button assigned.');

	document.querySelector('#report-selector').renderer = function (root) {
		if (root.firstChild) {
			return;
		}
		// create the <vaadin-list-box>
		const listBox = window.document.createElement('vaadin-list-box');
		// append 3 <vaadin-item> elements
		['Jose', 'Manolo', 'Pedro'].forEach(function (name) {
			const item = window.document.createElement('vaadin-item');
			item.textContent = name;
			listBox.appendChild(item);
		});
		// update the content
		root.appendChild(listBox);
	};

	document.querySelector('vaadin-grid').items = [];
	console.log('- Grid initialized.');

	var data = {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
		series:
			[5, 2, 4, 2, 1]
	};

	var options = {
		width: 190,
		height: 190,
		donut: true,
		donutWidth: 50,
		donutSolid: true,
		startAngle: 270,
		showLabel: true
	};

	Chartist.Pie('#ct-chart', data, options);

	var barData = {
		labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
		series: [
			[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
		]
	};

	var barOptions = {
		high: 10,
		low: -10,
		axisX: {
			labelInterpolationFnc: function (value, index) {
				return index % 2 === 0 ? value : null;
			}
		}
	};
	Chartist.Bar('#ct-bottom-chart', barData, barOptions);

	console.log('- Chart 1 is ready.');

	fetch('/data.json')
		.then(
			function (response) {
				console.log('- WebComponents data loaded.');
				return response.json();
			})
		.then(
			function (users) {
				globalData.users = users;
				document.querySelector('vaadin-grid').items = [].concat(users);

				console.log('- Grid data assigned.');

				updateNotifications({
					type: 'info',
					text: 'Loaded ' + users.length + ' records',
					subtext: 'So much users... who all these people are?'
				});

				return users;
			}).then(
		function (users) {
			var labels = users.reduce(function (acc, value) {
				if (acc.indexOf(value.location.city) === -1) {
					return acc.concat(value.location.city);
				}
				return acc;
			}, []);

			var options = {
				width: '100%',
				height: 200,
				low: 50,
				showArea: true
			};

			var series = [];
			labels.forEach(function (city, index) {
				users.forEach(function (record) {
					if (record.location.city === city) {
						if (typeof series[index] === 'undefined') {
							series[index] = 0;
						}
						series[index] += 1; // record.visitCount;
					}
				});
			});
			Chartist.Line('#ct-chart-big', {labels: labels, series: [series]}, options);

			console.log('- Chart 2 is ready. Cities:', labels.join(', '), 'Visits:', series.join(', '));
		});
};