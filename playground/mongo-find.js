const {MongoClient,ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect MongoDb server',err);
    }
    console.log('Server connected successfully');
    
    // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    //     console.log('Todos: ');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch data: ',err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos Count: `, count);
    // },(err)=>{
    //     console.log('Unalbe to fetch data');
    // })

    db.collection('Users').find({name: "Sachin Bhandari"}).toArray().then((docs)=>{
        console.log('Users: ');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch information');
    });

});