const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect with Mongo Server');
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectId('5a55cfafa917ae628461ef20')
    // },{
    //     $set:{
    //         completed:true
    //     } 

    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5a55074a48634c2d5c18e218')
},{
    $set :{
        name: 'Lone Survivor'
    },
    $inc :{
        age : 3
    } 
},{
    returnOriginal: false
}).then((result)=>{
    console.log(result);
});

    //db.close();
});