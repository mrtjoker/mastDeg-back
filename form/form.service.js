const Form = require("./form.model").Form;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Form.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new Form({
        formName: data.formName,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Form.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Form.findByIdAndRemove(id);
};

module.exports = service 