const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:5173/Acess";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get('/auth/twitter',
  passport.authenticate('twitter' ,{scope:["profile"]}));

router.get('auth/twitter/callback', 
  passport.authenticate('twitter', { 
    successRedirect:CLIENT_URL,
    failureRedirect: '/login/faild' }));

    module.exports = router;