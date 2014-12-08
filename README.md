## jQueryEachSelector [![Build Status](https://travis-ci.org/felquis/jQueryEachSelector.png?branch=master)](https://travis-ci.org/felquis/jQueryEachSelector)

Select multiple elements with complex selectors to do the same action in all.

## How to use
Pass a array of selectors to the plugin function, as below:

```js
$.eachSelector([
  $('#element').find('a.test'),
  '#otherElement > a',
  $('input[name="test"]').parents('p')
]).css({ color : 'yellow'});
```

The plugin will concatenate the selectors and returns them.

## Another approach
To do the same thing without using this plugin, do as below:
```js
  $('.element').find('> a.test').add(
    $('#otherElement > a')
  ).add(
    $('input[name="test"]').parents('p')
  ).css({
      color : 'red'
  });
```
This works perfectly, but it is hard to write and understand, don't you thing?

## Browser support
This plugin works fine from jQuery 1.4 until the last version.

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

## Contributing
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
Use in everything you feel necessary.
And do not remove the link from this repository :)
