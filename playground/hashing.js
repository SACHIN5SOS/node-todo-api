const {SHA256} =  require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id:10
}

var token = jwt.sign(data,'123abc');
console.log(token);

var decode = jwt.verify(token, '123abc');
console.log('Decoded: ',decode);  



// var message = 'I am user 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hashed message: ${hash}`);

// var data = {
//     id : 4
// }

// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data)+ 'somesecretthing').toString() 
// }

// token.data.id=5;
// token.hash= SHA256(JSON.stringify(data)).toString();

// var result = SHA256(JSON.stringify(token.data)+'somesecretthing').toString();
// if(result===token.hash){
//     console.log('Data was not changed');
// }
// else{
//     console.log('Data was  changed. You can not trust');
// }