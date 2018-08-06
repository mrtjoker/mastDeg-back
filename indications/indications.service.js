const Indications = require("./indications.model").Indications;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Indications.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Indications({
        indications: data.indications,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Indications.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Indications.findByIdAndRemove(id);
};

module.exports = service 