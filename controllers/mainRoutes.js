const router = require("express").Router();
const { User, Game, Comment, Team } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage
// router.get('/', withAuth, async (req, res) => {
router.get("/",  async (req, res) => {
  try {
  //  
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

// i would actually make an api route

// 1. use query params
// the client would make a fetch call to /search?team=tol&date=2021-12-06
// cons: what if you have a lot of params? your URL can get really long
// cons: it doesn't support input types that well; e.g. what if we want a list of teams? what if i want to pass in teams with "a Really Long name with Space"? you'll probably run into url encoding issues
router.get("/search", async (req, res) => {
 //  req.param.team
 // req.param.date

})

// 2. use request params
// the client would make a fetch POST call with body (JSON strings)
// { "team": "tol", "date": "2021-12-06"}
router.post("/search", async(req, res) => {
  // req.body.team
  // req.body.date
  // can be used in the WHERE clause via sequelize
})


// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
