mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShapeSchema = new Schema({
    shapeName: String,
    create_at: Date
});

var Shape = mongoose.model("shape", ShapeSchema);

module.exports = { Shape };

