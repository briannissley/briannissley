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

var bkConfig = {
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
	buildBlocks: function () {
		$.each(bkConfig, function (block, options) {
			if (options.build !== undefined) {
				options.build();
			}
		});
	}
};

$(document).ready(function () {
    console.log('document ready');
	bk.buildBlocks();
});