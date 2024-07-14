
 let database = function(){
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb+srv://anay2005:BESTmouse5@royalty-clone.ycpturz.mongodb.net/?retryWrites=true&w=majority&appName=Royalty-clone");
let db = client.db("Royalty_").collection("User_Data");
  return db;
 }

 let datatweet = ()=>{
  const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb+srv://anay2005:BESTmouse5@royalty-clone.ycpturz.mongodb.net/?retryWrites=true&w=majority&appName=Royalty-clone");
let db = client.db("Royalty_").collection("users_tweets");
  return db;

 }

 module.exports = {datatweet,database};
