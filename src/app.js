const express = require('express');
const app = express();

//this route will over ride the below routes if we use it above the below routes

// app.use((req,res) =>{  
//     res.send('Hello World');
// });

//Note - sequence of routes is important in express js otherwise it will over ride the below routes

app.use("/api/2",(req,res) =>{  
  res.send('hiiiii mani');
});


app.use("/user?s",(req,res) =>{  
  res.send('hiiiii hello');
});


app.get(/a/,(req,res) =>{  
  console.log(req.params);
  res.send('Hello World two 1234');
});//http://localhost:3000/car valid route it works it will match all the routes which has a in it

app.get("/users",(req,res)=>{
  res.send({username:"manisha",password:"qwerty"});
}); //this will match only the GET request method API calls to /users

app.post("/users",(req,res)=>{
  res.send("POST request to the homepage");
}); //this will match only the GET request method API calls to /users


//this will match all the HTTP request methods API calls to /api
app.use("/api",(req,res) =>{  
  res.send('Hello World two');
});


app.use("/api1/:userId/:name/:password",(req,res) =>{  
  console.log(req.params);
  res.send('Hello World two');
});


app.use("/a(pi)+*1",(req,res) =>{  
  console.log(req.params);
  res.send('Hello World two 12');
});/// http://localhost:3000/apipipi1111111 valid route it works


app.get(/a/,(req,res) =>{  
  console.log(req.params);
  res.send('Hello World two 123');
});/// http://localhost:3000/apipipi1111111 valid route it works

// app.use("/",(req,res) =>{  
//   res.send('Hello World');
// });
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});