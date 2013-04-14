/* http://github.com/felquis/jQueryEachSelector */

/*global jQuery: true */
/*jslint plusplus: true, indent: 4 */

(function ($) {
    "use strict";

    $.eachSelector = function () {

        var selector = $();

        $.each(arguments, function (i, element) {
            selector = selector.add(element);
        });

        return selector;
    };
}(jQuery));