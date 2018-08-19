mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicinesSchema = new Schema({
        adverseReactions: [],
        advice: [],
        color: '',
        colorCode: '',
        brandName: '',
        contraindications: [],
        dosage: [],
        form: '',
        genericName: '',
        imprint: '',
        shape: '',
        indications: [],
        interactions: [],
        mimsClass: '',
        presentation: '',
        presentationPack: '',
        initialThaiFDA: '',
        thaiFDAEN: '',
        thaiFDATH: '',
        usFDA: '',
        warning: [],
        registrationNumber: '',
        numberFD: '',
        allowFacturer: '',
        manuFacturer: '',
        distributor: '',
        marketer: '',
        create_at: Date
});

var Medicines = mongoose.model("medicines", MedicinesSchema);

module.exports = { Medicines };

