$(document).ready(function() {
  var started = false;
  var score = 0;
  var time = 20;
  var friends = $(".friends");
  var startButton = $("#start");
  var scoreBoard = $("#score")
  scoreBoard.text(score);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


  function randomizeImages() {
    var friendArr = $(".friends");
    var newArr = shuffleArray(friendArr);
    $(".friends").remove();
    for (var i = 0; i < friendArr.length; i++) {
      $(".col-md-2:eq(" + i + ")").append(friendArr[i]);
    };

  }


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
      bootbox.alert("You completed the game with a score of " + score + "!");
      started = false;
      time = 20;
      reIntialize();;
    }
  }

  function decider(friend) {
    if ($(friend).attr('data-state') === "unclicked") {
      increaseScore();
      randomizeImages();
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
