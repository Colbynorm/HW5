function clock() {
    var now = moment().format("dddd, MMMM Do YYYY, hh:mm:ss A");
    $("#currentDay").html(now);
    setTimeout(clock, 1000);
}
var hour = moment().format("HH")
hour = parseInt(hour);
console.log(typeof hour);
console.log(hour)

clock();


$(".saveButton").on("click", function(event){
    event.target
    var task = $(this).siblings("textarea").val();
    var time = $(this).attr("id");
    localStorage.setItem(time, task);
})

var calendarHour = $("#time");
var currentHour = moment().hours();
$("textarea").each(function(){
    if(calendarHour > currentHour){
    $(this).addClass("future");
    }
    else if(calendarHour < currentHour){
    $(this).addClass("past");
    }
    else if(calendarHour === currentHour){
    $(this).addClass("present");
    }
})

//.text() .val() .show()/.hide() .append() .empty() .siblings() .attr() .css() .html()