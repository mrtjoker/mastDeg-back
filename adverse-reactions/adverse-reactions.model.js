mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdverseReactionsSchema = new Schema({
    AdverseReactionsName: String,
    create_at: Date
});

var AdverseReactions = mongoose.model("adverse-reactions", AdverseReactionsSchema);

module.exports = { AdverseReactions };

