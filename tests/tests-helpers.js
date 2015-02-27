selectors = {
  one: [
    '#spoiler-one .spoiler-content',
    '#spoiler-one .icon'
  ],
  two: [
    '#spoiler-two .spoiler-content',
    '#spoiler-two em'
  ],
  'warning-one': [
    '#spoiler-one .spoiler-warning',
    '#spoiler-one i'
  ],
  'warning-two': [
    '#spoiler-two .spoiler-warning',
  ]
}

toggles = {
  one: '#spoiler-one .toggle-spoiler',
  two: '#spoiler-two .toggle-spoiler'
}

function assertExists(test, section, done){
  setTimeout(function(){
    for (var i = 0; i < selectors[section].length; i++) {
      var selector = selectors[section][i];
      test.isNotNull(document.querySelector(selector));
    }
    done();
  }, 0)
}

function assertNotExists(test, section, done){
  setTimeout(function(){
    for (var i = 0; i < selectors[section].length; i++) {
      var selector = selectors[section][i];
      test.isNull(document.querySelector(selector));
    }
    done();
  }, 0)
}

function toggle(section){
  document.querySelector(toggles[section]).click();
}

function parts(func, times, context){
  var i = 0;
  return function(){
    i++;
    if (i === times){
      func.apply(context || this, arguments);
    }
  }
}

function assertShown(test, section, done){
  done = parts(done, 2);
  assertExists(test, section, done);
  assertNotExists(test, 'warning-'+section, done);
}

function assertHidden(test, section, done){
  done = parts(done, 2);
  assertNotExists(test, section, done);
  assertExists(test, 'warning-'+section, done);
}

// Export our external helpers
window.parts = parts;
window.toggle = toggle;

window.assertShown = assertShown;
window.assertHidden = assertHidden;
