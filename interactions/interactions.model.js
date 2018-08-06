mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InteractionsSchema = new Schema({
    interactions: String,
    create_at: Date
});

var Interactions = mongoose.model("interactions", InteractionsSchema);

module.exports = { Interactions };

