const Presentation = require("./presentation.model").Presentation;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Presentation.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Presentation({
        presentationName: data.presentationName,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Presentation.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Presentation.findByIdAndRemove(id);
};

module.exports = service 