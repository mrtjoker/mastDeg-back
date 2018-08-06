const Advice = require("./advice.model").Advice;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Advice.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Advice({
        advice: data.advice,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Advice.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Advice.findByIdAndRemove(id);
};

module.exports = service 