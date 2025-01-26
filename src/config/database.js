const mongoose = require("mongoose");

const connectDb = async() =>{
    try{
        await mongoose.connect("mongodb://admin:Nimbus%402021@localhost:27017/devTinder?authMechanism=DEFAULT&authSource=admin")
        //authSource=admin: This tells MongoDB to authenticate against the admin database, even though you're connecting to (test) database.
    }catch(err){
        console.log(err)
    }           
}

module.exports  = connectDb;
