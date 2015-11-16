document.getElementById("start").addEventListener("click", startGame);
var started = false;
var elem = document.getElementById("start");
var score = 0;
var friends = document.getElementsByClassName("friends");
 for(var i=0;i<friends.length;i++){
        friends[i].addEventListener('click', increaseScore, false);
    }

function startGame() {
  if (started === false) {
    started = true;
    if (started === true) {
      elem.text = "Start Timer";
      countDown();
    }
  }
}

function countDown() {
  if (elem.text === "Start Timer") {
    elem.style.color = "#02E148";
    elem.text = "20";
    setTimeout("countDown()", 1000);
  } else if (elem.text > 0) {
    elem.text--;
    setTimeout("countDown()", 1000);
    if (elem.text < 15 && elem.text > 10) {
      elem.style.color = "#E56414";
    } else if (elem.text < 6) {
      elem.style.color = "red";
    }
  } else if (elem.text === "0"){
    elem.text = "Play Again?";
    started = false;
    alert("Your Score is " + score);
    reInitialize();
  }
}

function increaseScore(){
  score++;
  this.removeEventListener("click", increaseScore, false);
  this.addEventListener("click", decreaseTime, false);
}

function reInitialize() {
  var friends = document.getElementsByClassName("friends");
 for(var i=0;i<friends.length;i++){
        friends[i].addEventListener('click', increaseScore, false);
   
    }
    for(var i=0;i<friends.length;i++){
        friends[i].removeEventListener('click', decreaseTime, false);
    }
    score = 0;
}

function decreaseTime() {
  if (elem.text >= 3) {
    elem.text -=3;
  }

}

/* function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function swapElements(arr) {
    // create marker element and insert it where obj1 is
    var temp = document.createElement("div");
    obj1.parentNode.insertBefore(temp, obj1);

    // move obj1 to right before obj2
    obj2.parentNode.insertBefore(obj1, obj2);

    // move obj2 to right before where obj1 used to be
    temp.parentNode.insertBefore(obj2, temp);

    // remove temporary marker node
    temp.parentNode.removeChild(temp);
}
*/