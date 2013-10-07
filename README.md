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

## Browser support
This plugin works fine from jQuery 1.4 until the last version

## Build this project
Install [NodeJS](http://nodejs.org/download/), [GIT](http://git-scm.com/downloads) if you don't have it yet, [bower](http://bower.io/) and [grunt](http://gruntjs.com/)
```bash
npm install bower
npm install grunt-cli
```

1 - Clone it:
  `git clone git@github.com:felquis/jQueryEachSelector.git`

2 - Then go to the project's folder:
  `cd jQueryEachSelector`

3 - Install dependencies:
  `npm install`

4 - Run:
  `grunt build`

Maybe you'll need to use the `sudo` prefix

## License
Use in everything you feel necessary.
And do not remove the link from this repository :)