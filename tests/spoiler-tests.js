Tinytest.addAsync('spoilers should be hidden by default', function (test, done) {
  done = parts(done, 2);

  assertHidden(test, 'one', done);
  assertHidden(test, 'two', done);
});

Tinytest.addAsync('spoilers should be shown when toggled', function (test, done) {
  toggle('one');
  assertShown(test, 'one', function(){
    toggle('two');
    assertShown(test, 'two', done);
  });

});

Tinytest.addAsync('spoilers should be hidden when toggled back', function (test, done) {
  toggle('one');
  assertHidden(test, 'one', function(){
    toggle('two');
    assertHidden(test, 'two', done);
  });
});

Tinytest.addAsync("multiple spoilers should not be affected by one another's statuses", function (test, done) {
  otherWayAround = parts(function(){
    done = parts(done, 2);

    toggle('one');
    toggle('two');
    assertHidden(test, 'one', done);
    assertShown(test, 'two', done);
  }, 2);

  toggle('one');
  assertShown(test, 'one', otherWayAround);
  assertHidden(test, 'two', otherWayAround);
});
