var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required: true,    //to make it necessary 
        minLength: 1,
        trim : true    //To ignore extra white spaces
    },
    completed:{
        type:Boolean
    },
    completeAt:{
        type:Number
    },
    _creator:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
});

//Creating Todo
// var newTodo = new Todo({
//     text: '  Get some Call Of Duty    ',
//     completed: false ,
//     completedAt: 221

// });
// newTodo.save().then((docs)=>{
//    console.log(JSON.stringify(docs,undefined,2));
// },(e)=>{
//     console.log('Unable to fetch data: ',e);
// });
module.exports={Todo};