$(document).ready(function() {
  var started = false;
  var score = 0;
  var time = 20;
  var friends = $(".friends");
  var startButton = $("#start");
  var scoreBoard = $("#score")
  scoreBoard.text(score);

  $(document).on('click', '#start', function(event) {
    event.preventDefault();

    if (started === false) {
      startGame();
    }

  });

  $(document).on('click', '.friends', function(event) {
    event.preventDefault();

    if (started === true) {
      decider(this);
    };

  });


  function startGame() {
    $(".friends").attr('data-state', 'unclicked');
    started = true;

    if (started === true) {
      startButton.text("Start Timer");
      $(".alert").slideDown(250);
      countDown();
    }
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
      reIntialize();;
    }
  }

  function decider(friend) {
    if ($(friend).attr('data-state') === "unclicked") {
      increaseScore();
      $(friend).attr('data-state', 'clicked');
    } else if ($(friend).attr('data-state') === "clicked") {
      penalty();
    }
  }

  function reIntialize() {

    score = 0
    $(".friends").attr('data-state', 'unclicked');
    time = 20;
    scoreBoard.text(0);
  }

  function increaseScore() {
    score++
    scoreBoard.text(score);
  }

  function penalty() {
    if (time > 3) {

      time -= 3;
    }
    $(".friends").effect("shake", {
      times: 2
    }, 500);
  }

});