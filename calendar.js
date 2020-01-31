$(document).ready(function() {
  function clock() {
    var now = moment().format("dddd, MMMM Do YYYY, hh:mm:ss A");
    $("#currentDay").html(now);
    setTimeout(clock, 1000);
  }
  var hour = moment().format("HH");
  hour = parseInt(hour);
  //console.log(typeof hour);
  //console.log(hour)

  var saveButton = $(".saveButton");
  console.log(saveButton);
  saveButton.on("click", function() {
    console.log("click");
    var task = $(this)
      .siblings("textarea")
      .val();
    var time = $(this).attr("id");
    localStorage.setItem(time, task);
  });

  var currentHour = moment().hours();
  $("textarea").each(function() {
    var calendarHour = $(this).attr("id");
    //console.log($(this).attr("id"));
    if (calendarHour > currentHour) {
      $(this).addClass("future");
    } else if (calendarHour < currentHour) {
      $(this).addClass("past");
    } else if (calendarHour === currentHour) {
      $(this).addClass("present");
    }
  });
  clock();
  //.text() .val() .show()/.hide() .append() .empty() .siblings() .attr() .css() .html()
});
