const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js"); //requiring js file which will return back the current date.
let items = ["hii","hello"];
let workItem = [];
// app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');//required for ejs.---> must be below const app = ......
// using ejs we render files we want to see for that we need views folder from where the view engine will look for the file to be renderd.
//anything which is valid for ""html"" is valid for a  "ejs"
app.use(bodyParser.urlencoded({extended:true}));//not necessary to be true it could be false as well we just have to give it value.
app.use(express.static("public"));//public folder will contain all of the static pages which can be rendered using this line of code.

app.get("/",function(req,res){


// let today_is = date.getDay(); ---> this could have been used to display the date only which we are getting as the return from the getDay function
let today_is = date.getDate();
  res.render("list",{ListTitle:today_is , newItems:items});
});

app.post("/",function(req,res){
let item = req.body.input;
if(req.body.list === "work"){ /*through the "req.body.list" we are checking in which list page the button was clicked
if it is in work titled page then add the new item in the work array or else in the items array.*/
  workItem.push(item);
  res.redirect("/work");
}
else{
items.push(item);
res.redirect("/");
};
});

app.get("/work",function(req,res){
  res.render("list",{ListTitle:"Work List",newItems:workItem});
});

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000,function(){
  console.log("server is up and running on port 3000.");
})
