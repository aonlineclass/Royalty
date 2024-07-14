const express = require('express')
const session = require("express-session");
const home = require("./home");
const cookieParser = require("cookie-parser");
const login_signup = require('./login_signup')
const app = express()
app.set('view engine', 'ejs')
const main_user_dashboard= require("./main-user-dashboard")




app.use(session({
  secret: "tweetxclone-royalty-secret",
  saveUninitialized: true,
  resave: false
}));
app.use(main_user_dashboard)
app.use(cookieParser());
app.use(login_signup)
app.use(express.static('Client'))
app.use(express.static('images'))
app.use(home)


// app.get('/', (req, res) => {
//  console.log(req.session.name)
 
//   if(req.session.isLogin == true){
//     res.json({message:"Welcome to dashboard!"});
//   }else{
//    res.json({success:false})
//   }
// })


app.listen(3000, () => {
  console.log(`Royalty is Being listend on port 3000`)
})