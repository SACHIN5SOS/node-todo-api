var express = require('express');
var bodyParser = require('body-parser');
const _ = require('lodash');
var app= express();

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {Users} = require('./models/Users');   //Object destructing
var {ObjectId} = require('mongodb');
const port = process.env.PORT || 3000;

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



app.get('/todo',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({
            todos
        })
    },(e)=>{
        res.send(e);
    });
});

app.get('/todo/:id',(req,res)=>{
    var id = req.params.id; 

    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
        if(!todo){
         return   res.status(404).send();
        }
            res.status(200).send({todo});

    }).catch((e)=>{
        res.status(400).send();
    })
});

app.delete('/todo/:id',(req,res)=>{
    var id= req.params.id;
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }

        res.status(200).send(todo);

    }).catch((e)=>{
        res.status(400).send();
    });
    
});


app.patch('/todo/:id',(req,res)=>{
    var id= req.params.id;
    var body = _.pick(req.body,['text','completed']);
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completeAt = new Date().getTime();
    }
    else{
        body.completed=false;
        body.completeAt=null;
    }    

    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch((e)=>{
        res.status(400).send()
    })
});


app.post('/user',(req,res)=>{
    var body= _.pick(req.body,['email','password']);
    var user = new Users(body);
    user.save().then((user)=>{
        res.send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.listen(port,()=>{
    console.log(`Stating server at ${port}`);
});

module.exports = {app}; 



