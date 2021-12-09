const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Game, Team } = require("../../models");
const { Op } = require("sequelize");
// get method for our games depending on the search parameter
// INDEX page (with search function / filter)

// i would actually make an api route

// 1. use query params
// the client would make a fetch call to /search?team=tol&date=2021-12-06
// cons: what if you have a lot of params? your URL can get really long
// cons: it doesn't support input types that well; e.g. what if we want a list of teams? what if i want to pass in teams with "a Really Long name with Space"? you'll probably run into url encoding issues
// router.get("/search", async (req, res) => {
//   //  req.param.team
//   // req.param.date

//  })

// 2. use request params
// the client would make a fetch POST call with body (JSON strings)
// { "team": "tol", "date": "2021-12-06"}

// req.body.team
// req.body.date
// can be used in the WHERE clause via sequelize

router.post("/search", async (req, res) => {
  try {
    const dbSearchData = await Game.findAll({
      where: {
        [Op.or]: [{home_alias:req.body.alias},{away_alias:req.body.alias}]
        // home_alias: req.body.alias, this works
      },
    });
    res.status(200).json(dbSearchData);
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

router.get("/games", async (req, res) => {
  try {
    const gamesData = await Game.findAll({
      include: [{ model: Team }],
    });
    // only returns certain attributes., e.g. teams, date, etc
    // this API call would be called by the home page for the user
    res.status(200).json(gamesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a specific game
router.get("/games/:id", async (req, res) => {
  // this would be called by the client whenever the user click on a specific game
  // and the input would the "id" / "name"
  // this would return a lot more data
  // but about a specific game
});

module.exports = router;
