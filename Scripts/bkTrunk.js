var blocks = {
	bkNavbar: {
		build: function () {
			// Build logo
			var logoWrapper = document.createElement('div');
			$(logoWrapper).addClass('bkNavbar__logo');
			var img = document.createElement('img');			
			$(img).attr({
				'src': $$.navbar.logo.src,
				'alt': $$.navbar.logo.alt
			});
			logoWrapper.appendChild(img);
			$('.bkNavbar').append(logoWrapper);			
			
			// Build tabs
			$.each($$.navbar.tabs.tabNames, function (index, tabName) {
				var anchor = document.createElement('a');
				var id = 'navbartab_' + tabName;
				var textNode = document.createTextNode(tabName);
				anchor.appendChild(textNode);
				$(anchor).attr('href', '#');
				$(anchor).addClass('bkNavbar__tab');
				if (tabName === 'Home') {
					$(anchor).addClass('bkNavbar__tab--active');
				}
				$(anchor).click($$.navbar.tabs.onClick);
				$('.bkNavbar').append(anchor);
			});
		}
	}
};

var bk = {
	buildBlocks: function () {
		$.each(blocks, function (block, options) {
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