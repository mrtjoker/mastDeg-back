const Shape = require("./shape.model").Shape;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Shape.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Shape({
        shape: data.shape,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Shape.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Shape.findByIdAndRemove(id);
};

module.exports = service 