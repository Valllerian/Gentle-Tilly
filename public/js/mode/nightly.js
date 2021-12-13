var Nightly = require('../../../node_modules/nightly.js');

var Nightly = new Nightly();

document.getElementById("nightly").addEventListener("click", function(){
  Nightly.toggle();
});

// document.getElementById("nightly").addEventListener("click", nightUp);
// function nightUp() {
//   Nightly.toggle();;
// }


{/* <link id="style1" rel="stylesheet" href="css/dark.css
"> */}

// function toggle() {
//   var a = document.getElementById("style1");
//   a.x = 'css/dark2' == a.x ? 'css/dark' : 'css/dark2';
//   a.href = a.x + '.css';
// }