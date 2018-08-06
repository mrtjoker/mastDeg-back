const Factory = require("./factory.model").Factory;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Factory.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Factory({
        factory: data.factory,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Factory.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Factory.findByIdAndRemove(id);
};

module.exports = service 