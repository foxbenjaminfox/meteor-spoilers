Package.describe({
  name: 'bjf:spoilers',
  version: '1.0.0',
  summary: 'Use spoiler tags to avoid accidentally spilling the beans',
  git: 'https://github.com/foxbenjaminfox/meteor-spoilers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use(['templating', 'reactive-var'], 'client');

  api.addFiles(
    ['spoiler.html',
    'spoiler.css',
    'spoiler.js',
    ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');

  api.use(['bjf:spoilers', 'templating', 'reactive-var'], 'client');

  api.addFiles(
    [
    'tests/tests-helpers.js',
    'tests/spoiler-tests.js',
    'tests/spoiler-tests.html'
    ], 'client');
});
