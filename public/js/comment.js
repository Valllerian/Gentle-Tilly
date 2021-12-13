const commentForm = document.querySelector('#comment-form');
const dataId = commentForm.getAttribute('data-id');

const commentFormHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#comment').value.trim();


    appendToFile('./seeds/commentData.json');
    console.log(body);
    console.log(dataId);

    if (body) {

        const response = await fetch('/api/games/details', {
            method: 'POST',
            body: JSON.stringify({ body, dataId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert('Your comment sucks.');
        }
    }
};

commentForm.addEventListener('submit', commentFormHandler);
document
    .querySelector('#comment-button')
    .addEventListener('click', commentFormHandler);
