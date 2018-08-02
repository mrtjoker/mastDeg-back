const Interactions = require("./interactions.model").Interactions;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Interactions.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Interactions({
        interactionsName: data.interactionsName,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Interactions.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Interactions.findByIdAndRemove(id);
};

module.exports = service 