/* http://github.com/felquis/jQueryEachSelector */

/*global jQuery: true */
/*jslint plusplus: true, indent: 4 */

(function ($) {
	"use strict";

	$.eachSelector = function () {

		var allSelectors = arguments,
			len = allSelectors.length,
			i = 1,
			selector = $(allSelectors[0]);

		if (len > 1) {
			for (i; i < len; i++) {
				selector = selector.add(allSelectors[i]);
			}
		}

		return selector;
	};
}(jQuery));