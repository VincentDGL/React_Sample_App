var fs = require('fs');
var colors = require('colors');
var cheerio = require('cheerio');
var useTrackJs = true;
var trackJsToken = '';

fs.readFile('src/index.html', 'utf8', function (err, data) {
  if (err) {
    return console.log(err.bold.red);
  }

  var trackJsCode = '';

  if (useTrackJs) {
    if (trackJsToken) {
      trackJsCode = "<!-- BEGIN TRACKJS Note: This should be the first <script> on the page per https://my.trackjs.com/install --><script>window._trackJs = { token: '" + trackJsToken + "' };</script><script src=https://d2zah9y47r7bi2.cloudfront.net/releases/current/tracker.js></script><!-- END TRACKJS -->";
    } else {
      console.log('To track JavaScript errors, sign up for a free trial at TrackJS.com and enter your token in /tools/build.html on line 10.'.yellow);
    }
  }

  var $ = cheerio.load(data);
  $('head').prepend(trackJsCode);

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) return console.log(err.red);
  });

  console.log('index.html written to /dist'.green);
});
