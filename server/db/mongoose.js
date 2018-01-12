const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sachin5sos:ilovemyfamily123@ds046357.mlab.com:46357/nodetodoapp');

module.exports={mongoose}