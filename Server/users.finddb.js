
  const finddb = (db,uuid)=>{
      db().findOne({uuid:uuid}).then((result)=>{
        return result;
        })
  }

  const data_validate = (db,uuid,name,email,password,res,req)=>{
      db.findOne({ email: email}).then(validrel=>{
        if(validrel == null){
          db.insertOne({uuid:uuid,name: name, email: email,password: password}).then(result=>{
            [req.session.name,req.session.email,req.session.uuid] =[name,email,uuid];
            req.session.isLogin= true;
            res.json({success:true})
          })
          
        }else{
          res.json({success:false});
          
        }
        
                
    
      })
      
      
    }

  module.exports = {data_validate,finddb};