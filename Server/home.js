const express = require('express')
const router = express.Router()
const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
const path = require('path')

  router.get('/', function(req, res){;
  if(req.session.isLogin == true){
    res.render("home")
  }else{
    res.render("404")
    }
    

  })



module.exports = router;