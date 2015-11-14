//var started = false;

var elem = document.getElementById("start");


function change()
{
  started = true;
  var timer = setInterval(function(){countDown()}, 1000);
  setTimeout(function() {clearInterval(timer);}, 21000);
  setTimeout(function(){restart()}, 21000);
}

function countDown() {
 if (started === true) {
  elem.onclick = function(){nothing();}; ;
}
  if (elem.text === "Start Timer" || elem.text === "Play Again?") {
  elem.text = "20"; 
} else if (elem.text > 0) {
  elem.text--;
} 
}

function restart() {
  elem.text = "Play Again?";
  elem.onclick = function(){change()};
  //started = false;
}

function nothing () {

}