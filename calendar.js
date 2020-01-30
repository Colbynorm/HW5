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

$("textarea").each(function(){
    if(calendarHour > currentHour)
    $(this).addClass("future");
    
    else(calendarHour < currentHour)
    $(this).addClass("Past");

    ifelse(calendarHour === currentHour)
    $(this).addClass("Future");

    //also where you set the value of the boxes to whatever is in the localstorage
})

//.text() .val() .show()/.hide() .append() .empty() .siblings() .attr() .css() .html()