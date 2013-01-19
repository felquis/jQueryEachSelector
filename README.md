## jQueryEachSelector

Looking for a description, see example below.

## How to use
select multiple elements with complicated selectors.

```js
$.eachSelector([
	$('#element').find('a.test'),
	'#otherElement > a',
	$('input[name="test"]').parents('p')
]).css({ color : 'yellow'});
```

## Another approach
To do the same without using this plugin, do as follows:
```js
  $('.element').find('> a.test').add(
    $('#otherElement > a')
  ).add(
    $('input[name="test"]').parents('p')
  ).css({
      color : 'red'
  });
```
This will work perfectly, but it is hard to understand, do not you think?

## Thanks
To [me](http://github.com/felquis), and to my [friend](http://github.com/DiegoLopesLima) who helped me a lot

## License
Use in everything you feel necessary.
And do not remove the link from this repository :)