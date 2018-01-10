// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); //Same as above line but this is object destructing

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect with Mongo Server');
    }
    console.log('Connected to MongoDb Server');
  
//   /* 
//     db.collection('Todos').insertOne({
//         test:'Something to do',
//         completed: false
//     },(err,result)=>{
//         if(err){
//             return console.log('Unable to Insert value: ',err);
//         }

//         console.log(JSON.stringify(result.ops,undefined,2));
//     }); 
//     */
    db.collection('Users').insertOne({
        name: "Sachin Bhandari",
        age: 19,
        location: "Bsf Campus Indore"
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert value: ', err);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    });

   db.close(); 
});