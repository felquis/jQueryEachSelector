/*  jQuery EachSelector
	License
		Use in everything you feel necessary.
		And do not remove the link from this repository :)
	By: @felquis and @DiegoLopesLima
	Repo: http://github.com/felquis/jQueryEachSelector
*/
;(function($) {

	$.eachSelector = function() {

		var selectors = arguments,
			len = selectors.length,
			first = $(selectors[0]);

		if(len > 1) {
			for(var i = 1; i < len; i++) {
				first = first.add(selectors[i]);
			}
		}

		return first;
	};
})(jQuery);