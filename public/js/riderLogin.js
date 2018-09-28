/* global moment */

// When user clicks add-btn
$("#add-rider").on("click", function(event) {
  event.preventDefault();

  var newRider = {
    first_name: $("#first_name")
      .val()
      .trim(),
    last_name: $("#last_name")
      .val()
      .trim(),
    address: $("#address")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim()
  };

  console.log(newRider);

  // Send an AJAX POST-request with jQuery
  $.post("/api/rider", newRider)
    // On success, run the following code
    .then(function() {
      $("#database-info").prepend(
        "<tr><td>" +
          newRider.first_name +
          "</td><td>" +
          newRider.last_name +
          "</td><td>" +
          newRider.address +
          "</td><td>" +
          newRider.email +
          "</td></tr>"
      );
    });

  // Empty each input box by replacing the value with an empty string
  $("#first_name").val("");
  $("#last_name").val("");
  $("#address").val("");
  $("#email").val("");
  $("#password").val("");
});

$.get("/api/riders", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      $("#database-info").prepend(
        "<tr><td>" +
          data[i].first_name +
          "</td><td>" +
          data[i].last_name +
          "</td><td>" +
          data[i].address +
          "</td><td>" +
          data[i].email +
          "</td></tr>"
      );
    }
  }
});
