// const fs = require('fs');
const commentForm = document.querySelector('#comment-form');
const dataId = commentForm.getAttribute('data-id');

// create a function that uses commentData as a parameter (static)
// read from submission
// write into an object with the ID

const commentFormHandler = async (event) => {
    event.preventDefault();
    const body = document.querySelector('#comment').value.trim();


    appendToFile('./seeds/commentData.json');

    console.log(body);
    console.log(dataId);

    if (body) {
        const response = await fetch('/api/games/details/', {
            method: 'POST',
            body: JSON.stringify({ body, dataId }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            window.location.reload();

        } else {
            alert('Try again chachi');
        }
    }
};

commentForm.addEventListener('submit', commentFormHandler);
document
    .querySelector('#comment-button')
    .addEventListener('click', commentFormHandler);



// using commentData.json as the static parameter 
// inside of it, instead of x (comment data), we build an object of the comment body and the id
    // function jackscum(x,y) {
    //     x + y
         
    // }
    // console.log(jackscum(5,5))
    // console.log(jackscum(1,1))