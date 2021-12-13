const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Game, User, Comment } = require("../../models");
const { Op } = require("sequelize");

router.post("/search", async (req, res) => {
  try {
    const dbSearchData = await Game.findAll({
      where: {
        [Op.or]: [{ home_alias: req.body.alias }, { away_alias: req.body.alias }]
      },
    });
    res.render("results");
    // res.status(200).json(dbSearchData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/search", async (req, res) => {
  if (req.session.loggedIn) {
    try {
      console.info(`${req.method} idk what it is`);
      res.render("search", {
        loggedIn: req.session.loggedIn,
      });
      // res.render('main', {
      //   games
      // });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.redirect("/login");
    return;
  }
});


// get a specific game
router.get("/:id", async (req, res) => {
  try {
    const gamesData = await Game.findAll({
      where: {
        [Op.or]: [{ home_alias: req.params.id }, { away_alias: req.params.id }]
      },
    });
    // console.log(gamesData)
    // const games = gamesData.get({ plain: true });
    res.render('results', {
      gamesData,
      loggedIn: req.session.loggedIn,

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
 
});


router.get("/details/:alias", async (req, res) => {
  try {
    
    const gamesId = await Game.findAll({
      where: {
        [Op.or]: [{ id: req.params.alias }]
      },
      include: [

        { model: Comment, attributes: ["body", "game_id", "user_id", "username"]},
        
      ],
      // , include: [{ model: User, attributes: ["name"] }]
    });
    req.session.save(() => {
      req.session.game_id = req.params.alias;
    });
    console.log(gamesId)
    // const games = gamesData.get({ plain: true });
    res.render('game', {
      gamesId,
      loggedIn: req.session.loggedIn,

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // this would be called by the client whenever the user click on a specific game
  // and the input would the "id" / "name"
  // this would return a lot more data
  // but about a specific game
});


module.exports = router;
