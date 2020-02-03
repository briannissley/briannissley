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
				//anchor.addEventListener('click', $$.navbar.tabs.onClick);
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
	},
	forEachTesting: function (selector) {
		// forEach method, could be shipped as part of an Object Literal/Module
		var forEach = function (array, callback, scope) {
		  for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]); // passes back stuff we need
		  }
		};

		// Usage:
		// optionally change the scope as final parameter too, like ECMA5
		var myNodeList = document.querySelectorAll('li');
		forEach(myNodeList, function (index, value) {
			console.log(index, value); // passes index + value back!
		});
	}
};

$(document).ready(function () {
    console.log('document ready');
	bk.buildBlocks();
});