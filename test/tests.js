test("Alguns testes", function() {

	var $wrap = $.eachSelector($('body').find('.wrap')),
		length = $wrap.length;

 	equal( length, 1, "Tem um .wrap");
});

test("Concatena todos os parametros", function() {

	var $todos = $.eachSelector(
			$('body').find('.wrap'),
			$('.wrap').find('> div')),
		length = $todos.length;

 	equal( length, 7, "Tem um .wrap");

 	notEqual($todos.hasClass('teste'), true, 'Não tem a classe .teste');

 	$todos.addClass('teste');
 	
 	equal($todos.hasClass('teste'), true, 'Tem a classe .teste')
});