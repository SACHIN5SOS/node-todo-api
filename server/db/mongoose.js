const mongoose = require('mongoose');

const db= require('./../config/database');
mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURL,{
    useMongoClient:true
}).then(()=>console.log('Mongo Connected'))
.catch(err=>console.log(err));

module.exports={mongoose}