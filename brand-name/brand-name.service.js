const Brand = require("./brand-name.model").Brand;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Brand.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Brand({
        brandName: data.brandName,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Brand.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Brand.findByIdAndRemove(id);
};

module.exports = service 