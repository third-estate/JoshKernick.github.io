(function() {
  'use strict'
  var app = {
  };

  document.getElementById("p0").addEventListener('mouseover', () => app.toggleHighlight("p0", "b0", true));
  document.getElementById("p0").addEventListener('mouseout', function() {app.toggleHighlight("p0", "b0", false);});

  document.getElementById("p1").addEventListener('mouseover', function() {app.toggleHighlight("p1", "b1", true);});
  document.getElementById("p1").addEventListener('mouseout', function() {app.toggleHighlight("p1", "b1", false);});

  document.getElementById("p2").addEventListener('mouseover', function() {app.toggleHighlight("p2", "b1", true);});
  document.getElementById("p2").addEventListener('mouseout', function() {app.toggleHighlight("p2", "b1", false);});

  document.getElementById("p3").addEventListener('mouseover', function() {app.toggleHighlight("p3", "b3", true);});
  document.getElementById("p3").addEventListener('mouseout', function() {app.toggleHighlight("p3", "b3", false);});

  document.getElementById("p4").addEventListener('mouseover', function() {app.toggleHighlight("p4", "b4", true);});
  document.getElementById("p4").addEventListener('mouseout', function() {app.toggleHighlight("p4", "b4", false);});

  document.getElementById("p5").addEventListener('mouseover', function() {app.toggleHighlight("p5", "b5", true);});
  document.getElementById("p5").addEventListener('mouseout', function() {app.toggleHighlight("p5", "b5", false);});

  app.toggleHighlight = function (p, b, toggleOn) {
    if (toggleOn) {
      document.getElementById(p).classList.add("enlarge");
      document.getElementById(b).classList.add("highlight");
    }
    else {
      document.getElementById(p).classList.remove("enlarge");
      document.getElementById(b).classList.remove("highlight");
    }
  }
  console.log("loaded");
})();
