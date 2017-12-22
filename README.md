# pugify-html

[browserify]: https://github.com/substack/node-browserify
[pug]: https://github.com/pugjs/pug
[browserify-plain-jade]: https://github.com/redhotvengeance/browserify-plain-jade
[package.json]: package.json

[browserify] & [pug] - straight up.

## Another, really?

This began as a fork of the excellent browserify transform
[browserify-plain-jade], which I fequently enjoyed using. The main goal
was to change the name to reflect that pug is now the official name.
In the process, I also decided to shorten the name and to change the
[package.json] dependency to always use the laest version of
pug.

## How to install

```bash
npm install pugify-html
```

## How to use

Make some pug:

```pug
h1 I am a very special penguin!
```

Require it:

```js
var template = require('./penguin-pug.pug');

$('.container').append(template);
```

browserify it with the JavaScript API:

```js
var pug = require('pugify-html');

var b = browserify();
b.transform(pug);
b.add('main.js');
b.bundle(...);
```

...or the CLI:

```bash
browserify -t pugify-html foo.pug > bundle.html
```

## Contribute

1. Fork
2. Create
3. Code
4. Push
5. Submit
6. Yay!

## License

This repository is liscensed under the MIT liscence to allow anyone to use or
modify it. See [LISCENSE](LISCENSE)
