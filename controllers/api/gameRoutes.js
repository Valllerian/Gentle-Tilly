const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Game, Team } = require('../../models');

// get method for our games depending on the search parameter

router.get('/', async (req, res) => {
    try {
      const gamesData = await Game.findAll({
        include: [{ model: Team }]
        },
      );
      res.status(200).json(gamesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
module.exports = router;
