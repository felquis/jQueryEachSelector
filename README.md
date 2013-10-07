## jQueryEachSelector

Select in the DOM multiple elements with complicated/complex selectors to do the same action in all.

## How to use
select multiple elements with complex selectors.

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

## License
Use in everything you feel necessary.
And do not remove the link from this repository :)