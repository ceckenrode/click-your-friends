var started = false;
var elem = document.getElementById("start");
document.getElementById("start").addEventListener("click", change);
​
​
function change() {
  started = true;
​
  var timer = setInterval(function() {
    countDown()
  }, 1000);
  setTimeout(function() {clearInterval(timer);}, 21000);
  setTimeout(function() {restart();}, 21000);
}
​
function countDown() {
  if (started === true) {
    elem.onclick = "#";
  }
  if (elem.text === "Start Timer" || elem.text === "Play Again?") {
    elem.style.color = "#02E148";
    elem.text = "20";
  } else if (elem.text > 0) {
    elem.text--;
    if (elem.text < 15 && elem.text > 10) {
      elem.style.color = "#E56414";
    } else if (elem.text < 6) {
      elem.style.color = "red";
    }
  }
}
​
function restart() {
  elem.text = "Play Again?";
  started = false;
  elem.onclick = function() {change(); };
}
1 Comment C