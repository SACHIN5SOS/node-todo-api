const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
// var Todo = mongoose.model('Todo',{
//     text:{
//         type:String,
//         required: true,    //to make it necessary 
//         minLength: 1,
//         trim : true    //To ignore extra white spaces
//     },
//     completed:{
//         type:Boolean
//     },
//     completeAt:{
//         type:Number
//     }
// });
//  var newTodo = new Todo({
//      text: '  Get some Call Of Duty    ',
//      completed: false ,
//      completedAt: 221

//  });
//  newTodo.save().then((docs)=>{
//     console.log(JSON.stringify(docs,undefined,2));
//  },(e)=>{
//      console.log('Unable to fetch data: ',e);
//  });

var Users = mongoose.model('Users',{
    email:{
        type:String,
        required: true,
        trim: true

    }
});

var newUser =  new Users({
    email : 'sachinb443@gmail.com'
});

newUser.save().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
},(e)=>{
    console.log(`Error is ${e}`);
})