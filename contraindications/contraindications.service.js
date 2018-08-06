const Contraindications = require("./contraindications.model").Contraindications;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Contraindications.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Contraindications({
        contraindications: data.contraindications,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Contraindications.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Contraindications.findByIdAndRemove(id);
};

module.exports = service 