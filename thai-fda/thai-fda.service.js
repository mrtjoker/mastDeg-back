const ThaiFDA = require("./thai-fda.model").ThaiFDA;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return ThaiFDA.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new ThaiFDA({
        initialThaiFDA: data.initialThaiFDA,
        thaiFDAEN: data.thaiFDAEN,
        thaiFDATH: data.thaiFDATH,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return ThaiFDA.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return ThaiFDA.findByIdAndRemove(id);
};

module.exports = service 