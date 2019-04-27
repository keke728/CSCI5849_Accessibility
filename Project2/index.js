$(document).ready(function(){
});

$('#startbtn').hover(
  function(){
    var sound = document.getElementById('btnAudio');
    if (promise !== undefined) {
    promise.then(_ => {
          sound.play();
    }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
    });
  }
);
