mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormSchema = new Schema({
    form: String,
    create_at: Date
});

var Form = mongoose.model("form", FormSchema);

module.exports = { Form };

