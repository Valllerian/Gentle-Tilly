
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
console.log(  "Has been saved")
if (response.ok) {
    console.log(  "Has been saved")
    window.location.reload();
}else {
    alert('Try again !');
}; 
}};

commentForm.addEventListener('submit', commentFormHandler);
document
    .querySelector('#comment-button')
    .addEventListener('submit', commentFormHandler);



// using commentData.json as the static parameter 
// inside of it, instead of x (comment data), we build an object of the comment body and the id
    // function jackscum(x,y) {
    //     x + y
         
    // }
    // console.log(jackscum(5,5))
    // console.log(jackscum(1,1))

