const AdverseReactions = require("./adverse-reactions.model").AdverseReactions;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return AdverseReactions.find().sort( { create_at: -1 } );
};

service.insert = (data, create_at) => {
    data = new AdverseReactions({
        adverseReactions: data.adverseReactions,
        create_at: create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return AdverseReactions.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return AdverseReactions.findByIdAndRemove(id);
};

module.exports = service 