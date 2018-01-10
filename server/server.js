var express = require('express');
var bodyParser = require('body-parser');

var app= express();

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {Users} = require('./models/Users');   //Object destructing

app.use(bodyParser.json());  //middlewarte funtion declaration

app.post('/todo',(req,res)=>{
    var todo =new Todo({
        text : req.body.text
    });


    todo.save().then((doc)=>{
    res.send(doc)
        }, (e)=>{
             res.status(400).send(e);
        });

});
app.listen(3000,()=>{
    console.log(`Stating server at 3000`);
})
