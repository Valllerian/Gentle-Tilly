const router = require("express").Router();
const { User, Game, Comment, Team } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage
// router.get('/', withAuth, async (req, res) => {
router.get("/",  async (req, res) => {
  try {
    console.log("router.get")
    const gamesData = await Game.findAll();

    const games = gamesData.map((schedule) => schedule.get({ plain: true }));
    res.render("homepage", {
      games
    });
    // res.render('main', {
    //   games
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
