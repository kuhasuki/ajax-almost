var FollowToggle = require('./follow_toggle.js');


$(function() {
  var toggles = $(".follow-toggle");
  var followToggles = [];
  toggles.each(function(i, toggle){
    var tawg = new FollowToggle(toggle);
    followToggles.push(tawg);
    tawg.render();
    tawg.handleClick();
  });
});
