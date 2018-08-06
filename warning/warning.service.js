const Warning = require("./warning.model").Warning;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Warning.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Warning({
        warning: data.warning,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Warning.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Warning.findByIdAndRemove(id);
};

module.exports = service 