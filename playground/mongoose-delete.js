const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

Todo.remove({}).then((result)=>{
    console.log(result);
});


Todo.findOneAndRemove({_id:''}).then((todo)=>{
    console.log(todo);
});


Todo.findByIdAndRemove('print Id here').then((todo)=>{
    console.log(todo);
});
