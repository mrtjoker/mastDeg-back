mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContraindicationsSchema = new Schema({
    contraindicationsName: String,
    create_at: Date
});

var Contraindications = mongoose.model("contraindications", ContraindicationsSchema);

module.exports = { Contraindications };

