const express = require('express');
const app = express();
const connectDb =  require('./config/database');
const userModel = require('./models/user');


app.post('/singup', async (req, res) => {
    // const { firstName, lastName, email, password    
    // } = req.body; 
    const user = new userModel({ firstName : "manisha", lastName :"rawat", email:"manisharawat209@gmail.com", password:"qwerty@11" });     
   
   try{ 
    await user.save();
    res.send(user);
   }catch(err){
        res.status(400).send("Error to create user :",err.massage);  
    }
});

connectDb()
.then(()=>{
    console.log("Database connected successfully")

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
})
.catch((err)=>{
    console.log("Database connection failed :",err.massage);
});
