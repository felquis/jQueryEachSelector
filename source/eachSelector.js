/* http://github.com/felquis/jQueryEachSelector */

(function ($) {
    "use strict";

    $.eachSelector = function () {

        var selector = $();

        $.each(arguments, function () {
            selector = selector.add(this);
        });

        return selector;
    };
}(jQuery));