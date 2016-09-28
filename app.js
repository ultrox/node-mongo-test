var express = require("express");
app = express();
// Con bodyParser permitimos que pueda parsear JSON
bodyParser = require("body-parser");
// methodOverride() nos permite implementar y personalizar métodos HTTP.
methodOverride = require("method-override");
mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/',function(req,res){
    res.send("Hello world");
});

app.use(router);
app.listen(3000,function(){
  console.log("Node Server running on port 3000");
})
