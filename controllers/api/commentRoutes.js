const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Game, Team } = require('../../models');

router.post('/games', async (req, res) => {
    // username
    // comment body
    console.info(`${req.method} request received`);
    const newComment = { userName, text } = req.body;
    if (req.body) {
        const newComment = {
            text,
            id: uniqid(),
        }
        readAndAppend(newComment), './seeds/commentData.json';
        res.json(newComment);
        console.log(newComment);
    }

});

router.get('/games', (req, res) =>
    readFromFile('./seeds/commentData.json').then((data) => res.json(JSON.parse(data)))
);