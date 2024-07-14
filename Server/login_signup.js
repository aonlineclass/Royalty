const express = require('express')
const router = express.Router()
// db is an module function
const {database}= require("./db");
const finddb = require("./users.finddb");
//body parser object
const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
  const {v4}= require("uuid");


router.route("/login").get((req,res)=>{
    res.render("login");
}).post((req,res)=>{

  let  {email,password}= req.body;
   
database().findOne({email: email, password: password}).then((result)=>{
  if(result!=null){
    req.session.isLogin = true;
    [req.session.name,req.session.email,req.session.uuid]= [result.name,email,result.uuid];
     res.json({success:true} )
}else{
  res.json({success:false})
}
}
)
     
})


router.route("/signup").get((req,res)=>{
  res.render("signup");
}).post((req,res)=>{
  const {name,email,password}= req.body;
  finddb.data_validate(database(),v4(),name,email,password,res,req);
  
})

module.exports=router;


