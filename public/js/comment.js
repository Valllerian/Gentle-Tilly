
const commentForm = document.querySelector('#comment-form');

// create a function that uses commentData as a parameter (static)
// read from submission
// write into an object with the ID


const commentFormHandler = async (event) => {
    event.preventDefault();
    const body = document.querySelector('#comment').value;

if(body){
    const response = await fetch('/api/games/details/:alias', {
        method: 'POST',
        body: JSON.stringify({ body }),
        headers: { 'Content-Type': 'application/json' },
});

if (response.ok) {
    score()
    window.location.reload();
    score()
}else {
    alert('Try again !');
}; 
}};

commentForm.addEventListener('submit', commentFormHandler);
document
    .querySelector('#comment-button')
    .addEventListener('submit', commentFormHandler);


    const awayPoint = document.querySelector('.awayPoints');
    const homePoint = document.querySelector('.homePoints');



function score(){
    if(Number(awayPoint) > Number(homePoint)){
        awayPoint.classList.add("victory")
        homePoint.classList.add("loss")
    }if(Number(awayPoint) < Number(homePoint))
    {
        awayPoint.classList.add("loss")
        homePoint.classList.add("victory")
    }
}

var imgs = document.getElementsByClassName('avatar');

for (var i = 0; i < imgs.length; i++) {
  var num = Math.floor(Math.random() * 10) + 1;
  imgs[i].src = '/assets/avatar' + num + '.png';
  imgs[i].alt = imgs[i].src;
}