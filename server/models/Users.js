var mongoose = require('mongoose');
const validator = require('validator');



var Users = mongoose.model('Users',{
    email:{
        type:String,
        required: true,
        trim: true,
        minlength:1,
        unique:true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password:{
        type: String,
        required: true,
        minlength:6
    },
    tokens:[{
        access:{
            type:String,
            required:true
        },
        token:{ 
            type:String,
            required:true
        }
    }]

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