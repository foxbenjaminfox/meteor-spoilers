Template.spoiler.created = function() {
  // Start with the spoiler hidden
  this.showSpoiler = new ReactiveVar(false);
}

function isSpoilerShown(){
  return Template.instance().showSpoiler.get();
}

Template.spoiler.helpers({
  show: isSpoilerShown,
  toggleButtonText: function(){
    if (isSpoilerShown()) {
      return "Hide Spoiler"
    } else {
      return "Show Spoiler"
    }
  }
});

Template.spoiler.events({
  "click .toggle-spoiler": function() {
    Template.instance().showSpoiler.set(!isSpoilerShown());
  }
});
