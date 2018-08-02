const Dosage = require("./dosage.model").Dosage;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Dosage.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Dosage({
        dosageName: data.dosageName,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Dosage.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Dosage.findByIdAndRemove(id);
};

module.exports = service 