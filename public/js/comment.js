const commentForm = document.querySelector('#comment-form');

const commentFormHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#comment').value.trim();
    const game_id = commentForm.data_id;
    console.log(body);
    console.log(game_id);
    return;
    if (body) {

        const response = await fetch('/api/games/details', {
            method: 'POST',
            body: JSON.stringify({ body, game_id }),
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