var through = require('through');
var pug = require('pug');

and then I said and then

module.exports = function(file) {
  if (!/\.pug$/.test(file)) {
    return through();
  }

  var data = '';

  function write(buf) {
    data += buf;
  }

  function end() {
    var that = this;

    pug.render(data, {filename:file}, function(err, html) {
      if (err) {
        that.emit('error', err);
        return;
      }

      html = html.replace(/\"/g, '\u005C\u0022');
      html = html.replace(/^(.*)/gm, '"$1');
      html = html.replace(/(.+)$/gm, '$1" +');
      html = html.replace(/\+$/, '');

      html = 'module.exports = ' + html + ';\n';

      that.queue(html);
      that.queue(null);
    });
  }

  return through(write, end);
};
