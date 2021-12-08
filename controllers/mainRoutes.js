const router = require("express").Router();
const { User, Game, Comment, Team } = require("../models");


router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/search", );
    return;
  }
  try {
    res.render("homepage", {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 
router.get("/homepage", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  try {

    // Get all Game and JOIN with User data
    const dbGameData = await Game.findAll({
    });

      // Serialize data so the template can read it -- else you get a mass of information that is overwhelming and difficult to work with
    const games = dbGameData.map((games) => games.get({ plain: true }));

      // Pass serialized data and session flag into template
    res.render("homepage", {
     games,
     loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  try {
    res.render("login", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

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



router.post("/search", async(req, res) => {
 
  // req.body.team
  // req.body.date
  // can be used in the WHERE clause via sequelize
})


router.get("/search",  async (req, res) => {
  try {
    console.log("router.get")
    const gamesData = await Game.findAll();

    const games = gamesData.map((schedule) => schedule.get({ plain: true }));
    res.render("search", {
      games,
      loggedIn: req.session.loggedIn,
    });
    // res.render('main', {
    //   games
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signUp", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/search");
    return;
  }
  try {

  
    res.render("signUp", {
    
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log(req.session.logged_in)
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/search');
    return;
  }
  res.render('login');
});

module.exports = router;
