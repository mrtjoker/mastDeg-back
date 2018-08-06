const Mims = require("./mims.model").Mims;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Mims.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Mims({
        mimsClass: data.mimsClass,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Mims.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Mims.findByIdAndRemove(id);
};

module.exports = service 