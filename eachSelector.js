/* http://github.com/felquis/jQueryEachSelector */
;(function($) {

	$.eachSelector = function() {

		var

			allSelectors = arguments,
			len = allSelectors.length,
			selector = $(allSelectors[0]);

		if(len > 1) {

			for(var i = 1; i < len; i++) {

				selector = selector.add(allSelectors[i]);
			}
		}

		return selector;
	};
})(jQuery);