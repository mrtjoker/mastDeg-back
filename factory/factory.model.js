mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FactorySchema = new Schema({
    factory: String,
    create_at: Date
});

var Factory = mongoose.model("factory", FactorySchema);

module.exports = { Factory };

