var express = require('express');
var bodyParser = require('body-parser');
const _ = require('lodash');
var app= express();
var {authenticate} = require('.//middleware/authenticate');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {Users} = require('./models/Users');   //Object destructing
var {ObjectId} = require('mongodb');      
const port = process.env.PORT || 3000;     //For setting environment in Port 3000 or in process env Port specified 

app.use(bodyParser.json());  //middleware funtion declaration


app.post('/todo',authenticate,(req,res)=>{
    
    var todo =new Todo({
        text : req.body.text,
        _creator: req.user._id
    });
    
    todo.save().then((doc)=>{   //save  todo
        res.send(doc)
    }, (e)=>{
        res.status(400).send(e);
    });

});



app.get('/todo',authenticate,(req,res)=>{
    Todo.find({
        _creator:req.user._id
    }).then((todos)=>{
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
    });
});


app.post('/user',(req,res)=>{
    var body= _.pick(req.body,['email','password']);
    var user = new Users(body);
    
    user.save().then(()=>{
       return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.post('/user/login',(req,res)=>{
    var body = _.pick(req.body,['email','password']);
   Users.findByCredentials(body.email,body.password).then((user)=>{
       return user.generateAuthToken().then((token)=>{
            res.header('x-auth',token).send(user);
       });        
   }).catch((e)=>{
         res.status(400).send("no user");
   });  
    
});


app.get('/user/me',authenticate,(req,res)=>{
        res.send(req.user);
});


app.delete('/user/me/token',authenticate,(req,res)=>{
    req.user.removeToken(req.token).then(()=>{
        res.status(200).send();
    }, ()=>{
        res.status(400).send();
    });
});

app.listen(port,()=>{
    console.log(`Stating server at ${port}`);
});

module.exports = {app}; 



