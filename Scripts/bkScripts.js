var $$ = {
	navbar: {
		tabs: [
			'Home',
			'Comedy'
		],
		onTabClick: function (e) {
			console.log('$$.navbar.onTabClick');
		}
	}
};

var config = {
	bkNavbar: {
		build: function () {
			$.each($$.navbar.tabs, function (index, tabName) {
				var anchor = document.createElement('a');
				var id = 'navbartab_' + tabName;
				var textNode = document.createTextNode(tabName);
				anchor.appendChild(textNode);
				$(anchor).attr('href', '#');
				$(anchor).addClass('bkNavbar__tab');
				$(anchor).click($$.navbar.onTabClick);
				$('.bkNavbar').append(anchor);
			});
		}
	}
};

var bk = {
	
};

$(document).ready(function () {
    console.log('document ready');
});