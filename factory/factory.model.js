mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FactorySchema = new Schema({
    factoryName: String,
    create_at: Date
});

var Factory = mongoose.model("factory", FactorySchema);

module.exports = { Factory };

