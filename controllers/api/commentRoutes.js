const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Comment } = require('../../models');

// Comment = new Comment(api, req.params.id)
router.post('/details/:alias', async (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Comment.create({
        id: req.params.id,
        body: req.body.body,
        game_id: req.body.game_id,
        user_id: req.body.user_id
    })
        .then((newComment) => {
            // Send the newly created row as a JSON object
            res.json(newComment);
        })
        .catch((err) => {
            res.json(err);
        });
});
