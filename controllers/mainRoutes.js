const router = require("express").Router();
const { User, Game, Comment, Team } = require("../models");


router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/api/games/search", );
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

router.get("/profile", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id,
      {
        attributes: { exclude: ['password'] }
      });
    const user = userData.get({ plain: true });
    // Pass serialized data and session flag into template
    res.render("profile", {
      ...user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

 

router.get("/games/:alias", async (req, res) => {
  try {
    const dbSearchData = await Game.findAll({
      where: {
        [Op.or]: [{home_alias:req.params.alias},{away_alias:req.params.alias}]
        // home_alias: req.body.alias, this works
      },
    });
    res.render("results");
    // res.status(200).json(dbSearchData);
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



router.get("/signUp", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/api/games/search");
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
  
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
  
    res.redirect('/api/games/search');
    return;
  }
  res.render('login');
});

module.exports = router;
