if(process.env.NODE_ENV==='production'){
    module.exports={mongoURI:
        'mongodb://sachin5sos:ilovemyfamily123@ds046357.mlab.com:46357/nodetodoapp'
    }
}else{
    module.exports= {mongoURI: 'mongodb://localhost:27017'}
}