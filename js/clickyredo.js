$(document).ready(function() {
  console.log("document loaded");
  var started = false;
  console.log("started");
  var score = 0;
  var friends = $(".friends");
  var startButton = $("#start");
  console.log(friends);
  var score = 0;
  var time = 20;

  $(document).on('click', '#start', function(e) {
    e.preventDefault();
    startGame();
  });


  function startGame() {
    if (started === false) {
      started = true;

      if (started === true) {
        startButton.text("Start Timer");
        countDown();
      }
    }

        $(".friends").click(function() {
          
          if ($(this).hasClass('clicked')) {
            penalty();
            return;
          }
          
          $(this).addClass('clicked');
          increaseScore();
        });
  };

  function countDown() {
    if (startButton.text() === "Start Timer") {
      startButton.css("color", "#02E148");
      startButton.text(time);
      setTimeout(countDown, 1000);
    } else if (startButton.text() > 0) {
      time--;
      startButton.text(time);
      setTimeout(countDown, 1000);
    }
    if (startButton.text() < 15 && startButton.text() > 10) {
      startButton.css("color", "#E56414");
    } else if (startButton.text() < 6) {
      startButton.css("color", "red");
    }
    if (startButton.text() === "0") {
      startButton.css("color", "red");
      startButton.text("Play Again?");
      started = false;
      time = 20;
      reIntialize();
      return;
    }

  }

  function reIntialize() {

    score = 0
    $(".friends").removeClass('clicked');

  }

  function increaseScore() {
    score++
    console.log(score);
  }

  function penalty() {
    if (time > 3) {

      time -= 3;
    } 
     $(".friends").effect( "shake", {times:2}, 500 );
  }

});