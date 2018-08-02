const Color = require("./color.model").Color;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Color.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Color({
        colorName: data.colorName,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Color.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Color.findByIdAndRemove(id);
};

module.exports = service 