function hover(element) {
    element.setAttribute('src', '/assets/british.png');
  }

function unhover(element) {
    element.setAttribute('src', '/assets/blue-sound.png');
}

function hover02(element) {
    element.setAttribute('src', '/assets/eng.png');
  }

function unhover02(element) {
    element.setAttribute('src', '/assets/red-sound.png');
}

var audio = new Audio('/assets/british.mp3'); 

function myAudioFunction() {
       audio.play();
}

var audio02 = new Audio('/assets/american.mp3'); 

function myAudioFunction02() {
       audio02.play();
}