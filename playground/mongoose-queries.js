const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

var id= '5a571ceb1b35d135c481277811' ; 

if(!ObjectId.isValid(id)){
    console.log('Id is not Valid');
}

// Todo.find({
//      _id : id
//  }).then((todos)=>{
//     console.log(`Todos: `,todos);
//  });

//  Todo.findOne({
//      _id : id
//  }).then((todo)=>{
//      console.log('Todo is', todo);
//  });

 Todo.findById(id).then((todo)=>{
     if(!todo){
         return console.log('Id not find');
     }

     console.log('Todo : ',todo);
 }).catch((e)=>console.log(e));