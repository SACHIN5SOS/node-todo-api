var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
    email:{
        type:String,
        required: true,
        trim: true

    }
});

module.exports={Users};

//Creating mongoose
// var newUser =  new Users({
//     email : 'sachinb443@gmail.com'
// });

// newUser.save().then((docs)=>{
//     console.log(JSON.stringify(docs,undefined,2));
// },(e)=>{
//     console.log(`Error is ${e}`);
// })