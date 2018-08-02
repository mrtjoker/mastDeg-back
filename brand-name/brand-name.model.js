mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrandSchema = new Schema({
    brandName: String,
    create_at: Date
});

var Brand = mongoose.model("brand", BrandSchema);

module.exports = { Brand };

