var express = require('express');

const app = express();
app.use(function (req, res, next) {

 
    res.setHeader('Access-Control-Allow-Origin', '*');
  
  
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    next();
  });
var authrouter = require("./routes/authrouter")
var bookrouter = require("./routes/bookrouter")
var userrouter = require("./routes/userrouter")
var bodyparser = require('body-parser')

const path = require('path')
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname+"/public"))); 


app.use("/book",bookrouter);
app.use("/auth",authrouter);
app.use("/user", userrouter)
app.use(bodyparser.urlencoded({extended:true}))


app.use(bodyparser.json());

app.use(function (req, res, next) {

 
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);


  next();
});




app.listen(process.env.PORT || 3000, () => console.log('Server Running on http://localhost:3000')); 
   