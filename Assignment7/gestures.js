/* This file intentionally left blank. */

// Global Variables to track the mouse position
var downX = 0;
var downY = 0;
var upX = 0;
var upY = 0;

$(document).ready(function(){
  //Mouse down & Mouse up
  $("#gestureArea").mousedown(function(event) {
     // Get the position of clicked area
     downX = event.pageX;
     downY = event.pageY;
     Swipe();
    $("#gestureResult").text('Mouse Down!');
  });
  $("#gestureArea").mouseup(function() {
     // Get the position of clicked area
     upX = event.pageX;
     upY = event.pageY;
     Swipe();
  });
})

//Detect the swipe gesture
function Swipe(){
  if(downX < upX){
    $("#gestureResult").text('Swipe Right!');
  } else if (downX > upX){
    $("#gestureResult").text('Swipe Left!');
  } else {
    $("#gestureResult").text('Mouse Up!');
  }
};
