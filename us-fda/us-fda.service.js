const UsFDA = require("./us-fda.model").UsFDA;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return UsFDA.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new UsFDA({
        usFDA: data.usFDA,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return UsFDA.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return UsFDA.findByIdAndRemove(id);
};

module.exports = service 