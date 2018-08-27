const Medicines = require("./medicines.model").Medicines;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Medicines.find().sort({ create_at: -1 });
};

service.insert = (data) => {
    data = new Medicines({
        adverseReactions: data.adverseReactions,
        advice: data.advice,
        color: data.color,
        colorCode: data.colorCode,
        brandName: data.brandName,
        contraindications: data.contraindications,
        dosage: data.dosage,
        form: data.form,
        genericName: data.genericName,
        imprint: data.imprint,
        shape: data.shape,
        indications: data.indications,
        interactions: data.interactions,
        mimsClass: data.mimsClass,
        presentation: data.presentation,
        presentationPack: data.presentationPack,
        initialThaiFDA: data.initialThaiFDA,
        thaiFDAEN: data.thaiFDAEN,
        thaiFDATH: data.thaiFDATH,
        usFDA: data.usFDA,
        warning: data.warning,
        registrationNumber: data.registrationNumber,
        numberFD: data.numberFD,
        allowFacturer: data.allowFacturer,
        manuFacturer: data.manuFacturer,
        distributor: data.distributor,
        marketer: data.marketer,
        create_at: data.create_at
    })
    return data.save();
};

service.update = (id, data) => {
    return Medicines.findByIdAndUpdate(id, data, { "new": true });
};

service.delete = (id) => {
    return Medicines.findByIdAndRemove(id);
};

service.searchExact = (data) => {
    return Medicines.find(data);
}

service.searchBrand = (data) => {
    return Medicines.find({ brandName: data });
}
service.searchGeneric = (data) => {
    return Medicines.find({ genericName: data });
}
service.searchThaiFDA = (data) => {
    return Medicines.find({ thaiFDA: data });
}
service.searchForm = (data) => {
    return Medicines.find({ form: data });
}
service.searchShape = (data) => {
    return Medicines.find({ shape: data });
}
service.searchColor = (data) => {
    return Medicines.find({ color: data });
}
service.searchMims = (data) => {
    return Medicines.find({ mimsClass: data });
}
service.searchScoring = (data) => {
    return Medicines.find({ scoring: data });
}
service.searchLogo = (data) => {
    return Medicines.find({ logo: data });
}
service.searchMarking = (data) => {
    return Medicines.find({ marking: data });
}
service.searchManufacturer = (data) => {
    return Medicines.find({ manufacturer: data });
}
module.exports = service 