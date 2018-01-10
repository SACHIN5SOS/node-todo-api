const {MongoClient,ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect MongoDb server',err);
    }
    console.log('Server connected successfully');

    //deleteOne
    // db.collection('Todos').deleteOne({test: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteMany
    // db.collection('Todos').deleteMany({test:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });
});