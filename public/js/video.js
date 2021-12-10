var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause Video";
  } else {
    video.pause();
    btn.innerHTML = "Play Video";
  }
}