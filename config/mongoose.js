const mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/medicines';

mongoose.Promise = global.Promise;
// mongoose.connect(url);
mongoose.connect(url, {useNewUrlParser: true } )
exports.connect = () => {
    return mongoose.connection;
}