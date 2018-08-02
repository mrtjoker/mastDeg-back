const GenericName = require("./generic-name.model").GenericName;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return GenericName.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new GenericName({
        genericName: data.genericName,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return GenericName.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return GenericName.findByIdAndRemove(id);
};

module.exports = service 