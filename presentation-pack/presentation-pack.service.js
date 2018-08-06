const PresentationPack = require("./presentation-pack.model").PresentationPack;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return PresentationPack.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new PresentationPack({
        presentationPack: data.presentationPack,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return PresentationPack.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return PresentationPack.findByIdAndRemove(id);
};

module.exports = service 