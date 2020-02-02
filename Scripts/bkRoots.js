var $$ = {
	navbar: {
		logo: {
			src: 'Images/logo.png',
			alt: 'briannissley.com'
		},
		tabs: {
			tabNames: [
				'Home',
				'Comedy'
			],
			onClick: function (e) {
				console.log('$$.navbar.tabs.onClick');
				// Change active tab and page content to correspond with clicked tab
			}
		}
	}
};