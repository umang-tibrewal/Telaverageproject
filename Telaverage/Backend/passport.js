var passport = require("passport");
const TwitterStrategy=require("passport-twitter").Strategy
const TWITTER_CONSUMER_KEY="ZHotMG5weWdPRkFQTHl1UGwzbzk6MTpjaQ "
const TWITTER_CONSUMER_SECRET="VDMwdAMQ2J4NL37gUITFAMJWIT3bsr6so0RSfFWFflFl-dQCUe"

passport.use(new TwitterStrategy({
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: "http://localhost:5173/auth/twitter"
},
function(token, tokenSecret, profile, cb) {
  User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

