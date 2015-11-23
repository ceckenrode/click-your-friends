/* Adding a click event event listener to the start button that calls the startGame function
   declaring and intializing the started variable as false. Setting the variable elem to an array
   returned by document.getElementsByClassName("friends"). Then intializing the score to be 0. */
var started = false;
var elem = document.getElementById("start");
var score = 0;
var friends = document.getElementsByClassName("friends");
var score = 0;
document.getElementById("start").addEventListener("click", startGame);
//------------------------/endOf-Global Variables--------------------------------------------------------------


/* The first function called. If the game is not started, it is set to started now. If the game is started,
   we start the countDown() function. We also set event listeners for every element in the friends array to
   call the increaseScore function when clicked. */

function startGame() {
  if (started === false) {
    started = true;
    if (started === true) {
      elem.text = "Start Timer";
      countDown();
       for(var i=0;i<friends.length;i++){
        friends[i].addEventListener('click', increaseScore, false);
    }
    }
  }
}
//--------------------/endOf-startGame()-----------------------------------------------------------------------

/* If the timer is not started yet, we make sure the color is green. When pressed, we set the timer to 20, and then 
   call the countdown function recursively with a timer of 1 second each. On the next call the first else if statement is executed decrementing the
   value of elem.text by 1. We recall countdown() until we reach 0. Changing colors of the elem.text as we get to certain
   amounts. Once we get to 0, we change the text to "Play Again" on the next recursive call, make sure the text color is red, set 
   the started boolean to false, alert the user of their score, and call the reInitialize function.*/

function countDown() {
  if (elem.text === "Start Timer") {
    elem.style.color =  "#02E148";
    elem.text = "20";
    setTimeout("countDown()", 1000);
  } else if (elem.text > 0) {
    elem.text--;
    setTimeout("countDown()", 1000);
  }
    if (elem.text < 15 && elem.text > 10) {
      elem.style.color = "#E56414";
    } else if (elem.text < 6) {
      elem.style.color = "red";
    }
  } else if (elem.text === "0"){
    elem.text = "Play Again?";
    elem.style.color = "red";
    started = false;
    alert("Your Score is " + score);
    reInitialize();
    started = false;
  }
}
//-----------------/endOf-countDown()---------------------------------------------------------------------------

/* If the game is started, and a picture is clicked with the increaseScore event listener, we increase the score by one.
   Then we remove the increaseScore event listener from this item, and add the decreaseTime event listener which will 
   decrease the time remaining if the user clicks a picture twice.  */

function increaseScore(){
  if (started == true){
  score++;
  this.removeEventListener("click", increaseScore, false);
  this.addEventListener("click", decreaseTime, false);
} else {
  //do nothing
}
}
//-----------------/endOf-increaseScore()-----------------------------------------------------------------------

/* Sets the game up to be played again. Resets all event listeners, sets score back to 0. */

function reInitialize() {
  var friends = document.getElementsByClassName("friends");
  for(var i=0;i<friends.length;i++){
        friends[i].removeEventListener('click', decreaseTime, false);
    }
 for(var i=0;i<friends.length;i++){
        friends[i].addEventListener('click', increaseScore, false);
   
    }
    
    score = 0;
}
//----------------/endOf-reInitialize()-------------------------------------------------------------------------

/* This function is called if a user clicks an image twice in the same game. If there is enough time to spare, we 
subtract three seconds. */

function decreaseTime() {
  if (elem.text >= 3) {
    elem.text -=3;
  }

}
//---------------/endOf-decreaseTime()--------------------------------------------------------------------------
