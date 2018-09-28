/* global moment */

// When user clicks add-btn
$("#add-driver").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newDriver = {
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

  console.log(newDriver);

  // Send an AJAX POST-request with jQuery
  $.post("/api/driver", newDriver)
    // On success, run the following code
    .then(function() {
      $("#database-info").prepend(
        "<tr><td>" +
          newDriver.first_name +
          "</td><td>" +
          newDriver.last_name +
          "</td><td>" +
          newDriver.address +
          "</td><td>" +
          newDriver.email +
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

// When the page loads, grab all of our chirps
$.get("/api/drivers", function(data) {
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

$("#driverLoginInfo").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var driverLoginInfo = {
    email: $("#driverEmail")
      .val()
      .trim(),
    password: $("#driverPassword")
      .val()
      .trim()
  };

  console.log(driverLoginInfo);

  $.get("/api/drivers");
});
