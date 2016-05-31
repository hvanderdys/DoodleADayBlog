var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdownit');
var collections = require('metalsmith-collections');
var react = require('metalsmith-react').default;
var snippet = require('metalsmith-snippet');
var typography = require('metalsmith-typography');
var sass = require('metalsmith-sass');
var codeHighlight = require('metalsmith-code-highlight');
var static = require('metalsmith-static');
var paths = require('metalsmith-paths')
var drafts = require('metalsmith-drafts');
var options = require('./options.json');

metalsmith(__dirname)
  .use(static())
  .use(drafts())
  .use(collections(options.collection))
  .use(paths({
    property: "paths"
  }))
  .use(markdown(options.markdown))
  .use(typography())
  .use(codeHighlight())
  .use(snippet(options.snippet))
  .use(react(options.react))
  .use(sass(options.sass))
  .build(function (err) {
    if (err) throw err;
  });
