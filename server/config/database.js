if(process.env.NODE_ENV==='production'){
    module.exports={mongoURI:
        'mongodb://<dbuser>:<dbpassword>@ds046357.mlab.com:46357/nodetodoapp'
    }
}else{
    module.exports= {mongoURI: 'mongodb://localhost:27017'}
}