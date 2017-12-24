// dynamically add 'http://' to URL input field when field is active, therefore the original placeholder text can be displayed.  If a 'value='http://' was simpy add to the HTML markup for that <input> element, the placeholder attribute would be overridden by it.
$(".inputPhoto").on("focus", function() {
  // *** on focus !!! ***
  var addToURL = "http://";
  document.getElementById("q2").value = "http://";
});
// initialize the jQuery Chosen Plugin
$(".chosen-select").chosen({
  width: "210px",
  height: "204px",
  disable_search_threshold: 10
});
// set some defaults for jQuery Validate Plugin - make all input fields required
$.validator.setDefaults({
  ignore: ":hidden:not(.chosen-select), .chosen-search-input",
  debug: true,
  success: "valid",
  disable_search: true,
  rules: {
    select1: {
      required: true
    },
    select2: {
      required: true
    },
    select3: {
      required: true
    },
    select4: {
      required: true
    },
    select5: {
      required: true
    },
    select6: {
      required: true
    },
    select7: {
      required: true
    },
    select8: {
      required: true
    },
    select9: {
      required: true
    },
    select10: {
      required: true
    },
    select11: {
      required: true
    },
    select12: {
      required: true
    }
  }
});
// Initialize jQuery Validate Plugin to evaluate Form inputs
$("#surveyForm").validate({
  // If form requirements aren't met errors display on screen, Form will not submit until corrected
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    console.log(errors);
    if (errors) {
      var message;
      if (errors === 1) {
        message = "YOU FAILED TO ANSWER ONE QUESTION";
      } else if (errors > 1) {
        message = "YOU FAILED TO ANSWER " + errors + " QUESTIONS";
      }
      // There is a placeholder div in HTML with class="errorMessage"
      $("div.errorMessage span")
        .html(message)
        .css("color", "red");
      $("div.errorMessage").show();
    } else {
      $("div.errorMessage").hide();
    }
  },
  // When Form has been fully validated.....
  submitHandler: function(form) {
    // Gather name and photo URL from Form
    var name = $("#q1")
      .val()
      .trim();
    var photo = $("#q2")
      .val()
      .trim();
    var scores = [];
    // Gather responses (scores) from the 10 survey questions
    for (var i = 3; i < 13; i++) {
      var scoreNumber = parseInt($("#q" + i).val());
      scores.push(scoreNumber);
    }
    // Utilize constructor to create new Friend object
    var newFriend = new Friend(name, photo, scores);
    var currentURL = window.location.origin;
    // send the new Friend Object via POST request to server
    $.post(currentURL + "/api/friends", newFriend)
      // returns the array of friend objects as the "data" variable
      .done(function(data) {
        // Array to store the difference in scores between the user and each friend in the friend's array
        var differencesTotal = [];
        // loop through all friends excluding the last object, which is the current user
        for (var i = 0; i < data.length - 1; i++) {
          // Array to store the differences per question response between current user and current friend
          var differences = [];
          for (var j = 0; j < data[i].scores.length; j++) {
            // Math.abs returns the result as an absolute number, no negatives
            var indexDiff = Math.abs(scores[j] - data[i].scores[j]);
            differences.push(indexDiff);
          }
          // Sums all of the score differences with current friend and pushes to differencesTotal array
          var differenceSum = differences.reduce((a, b) => a + b);
          differencesTotal.push(differenceSum);
        }
        // All friend scores have been compared to current user, summed and added to differencesTotal array
        // Find the lowest number in the differencesTotal array which results in the Friend match
        var lowest = 0;
        for (var k = 1; k < differencesTotal.length; k++) {
          if (differencesTotal[k] < differencesTotal[lowest]) lowest = k;
        }
        // friend match identified
        var bestFriend = data[lowest];
        // Present results using the Vex Dialog Library (pop-up window)
        vex.defaultOptions.className = "vex-theme-flat-attack";
        vex.dialog.alert({
          unsafeMessage:
            '<h1 class="text-center" id="newFriendMeet" >MEET YOUR NEW FRIEND</h1><h2 class="text-center newFriendName">' +
            bestFriend.name +
            '</h2><img class="col-xs-8 col-xs-offset-2" id="friendImage" width="375" src="' +
            bestFriend.photo +
            '"></img>'
        });
        $(".vex-dialog-message")
          .addClass("clearfix")
          .css("overflow", "scroll"); // keeps Vex Dialog OK button from floating to right of image

        // When screen is clicked, homepage will load after 1 second
        $(document).on("click", function() {
          window.setTimeout(function() {
            window.location = currentURL;
          }, 400);
        });
      });
  }
});

// Constructor for creating new Friend Object
function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}
