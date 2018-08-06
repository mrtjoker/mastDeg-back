mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdviceSchema = new Schema({
    advice: String,
    create_at: Date
});

var Advice = mongoose.model("advice", AdviceSchema);

module.exports = { Advice };

