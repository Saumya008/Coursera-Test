(function (window) {
var names = ["Saumya", "Selena", "Jennifer", "Jai", "Mark", "Frank", "Laura", "Ram", "Jack"];
for (var i in names) {
var firstLetter = ((names[i]).charAt(0)).toLowerCase();
if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);