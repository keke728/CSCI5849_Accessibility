$(document).ready(function(){
});

$('#startbtn').hover(
  function(){
    var sound = document.getElementById('btnAudio');
    const playPromise = sound.play();
    if (playPromise !== null) {
      playPromise.catch(() => {sound.play();})
});
