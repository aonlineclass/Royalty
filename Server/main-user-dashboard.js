    const express = require('express')
    const router = express.Router()
    const bodyParser=require('body-parser')
    const {v4}= require("uuid")
    const {datatweet} = require ('./db')
    const {database} = require ('./db')
    const {finddb}=require('./users.finddb')
    router.use(bodyParser.urlencoded({ extended: false }))
    router.use(bodyParser.json())

    

    router.get("/tweets",(req,res)=>{
        const tweetobj = {
            "tweet_id": v4(),
            "user_name":req.session.name,
            "user_id": req.session.uuid,
            "content": req.query.tweets_content,
            "created_at": new Date().getTime(),
            "views":0,
            "likes_count": 0,
            "retweets_count": 0,
            "replies_count": 0,
            "replies": [
              {
                "reply_id": v4(),
                "user_id": req.session.uuid,
                "content": "string",
                "created_at": "datetime",
                "updated_at": "datetime",
                "likes_count": "integer"
              }
            ]
        }
 
       try {
         datatweet().insertOne(tweetobj).then((result)=>{
        (result.acknowledged == true)? res.json({success:true}):res.json({success:false});
         })
       } catch (error) {
        throw new Error(error.message)
        
       }
    })

    router.get('/get-tweets',(req,res)=>{
   
   datatweet().find({}).toArray().then((response)=>{
        res.json(response)
   }) 
    })

    router.get('/update_data',(req,res)=>{
        
        datatweet().findOneAndUpdate({tweet_id:req.query.t_id},{$inc:{likes_count:1}}).then((response)=>{
                res.json({success:true})

        })
    


    })
    

  
    
    

    module.exports = router