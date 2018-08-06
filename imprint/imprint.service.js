const Imprint = require("./imprint.model").Imprint;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Imprint.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Imprint({
        imprint: data.imprint,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Imprint.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Imprint.findByIdAndRemove(id);
};

module.exports = service 