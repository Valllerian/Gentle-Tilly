const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Game, Team } = require('../../models');

// get method for our games depending on the search parameter
// INDEX page (with search function / filter)
router.get('/games', async (req, res) => {
    try {
      const gamesData = await Game.findAll({
        include: [{ model: Team }]
        },
      );
      // only returns certain attributes., e.g. teams, date, etc
      // this API call would be called by the home page for the user
      res.status(200).json(gamesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// get a specific game
router.get("/games/:id", async(req, res) => {
  // this would be called by the client whenever the user click on a specific game
  // and the input would the "id" / "name"

  // this would return a lot more data 
  // but about a specific game

})

  
module.exports = router;
