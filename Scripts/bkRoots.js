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
			onClick: function () {
				console.log('$$.navbar.tabs.onClick');
				// Change active tab and page content to correspond with clicked tab
				var clickedTab = this;
				var class_ActiveTab = 'bkNavbar__tab--active';
				var class_ActivePage = 'bkPage--active';
				if (!$(clickedTab).hasClass(class_ActiveTab)) {
					var tabs = $('.bkNavbar__tab');
					$.each(tabs, function (index, tab) {
						var tabText = tab.innerText;
						var page = $('#page_' + tabText);
						if (tabText === clickedTab.innerText) {
							if (!$(tab).hasClass(class_ActiveTab)) {
								$(tab).addClass(class_ActiveTab);
							}
							if (!page.hasClass(class_ActivePage)) {
								page.addClass(class_ActivePage);
							}
						}
						else {
							if ($(tab).hasClass(class_ActiveTab)) {
								$(tab).removeClass(class_ActiveTab);
							}
							if (page.hasClass(class_ActivePage)) {
								page.removeClass(class_ActivePage);
							}
						}
					});
				}
				
				//Vanilla JS Testing
				//
				//var tabs = document.getElementsByClassName('bkNavbar__tab');
				//[].forEach.call(tabs, function (el, index, array) {
				//	
				//}, false);
			}
		}
	}
};