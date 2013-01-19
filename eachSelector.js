/* http://github.com/felquis/jQueryEachSelector */

/*global jQuery: true */
/*jslint plusplus: true, indent: 4 */

(function ($) {
    "use strict";

    $.eachSelector = function () {

        var allSelectors = arguments,
            selector = $(allSelectors[0]);

        if (allSelectors.length > 1) {
            $.each(allSelectors, function (i, element) {
                selector = selector.add(element);
            });
        }

        return selector;
    };
}(jQuery));