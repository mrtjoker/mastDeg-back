const service = require('./medicines.service');
controller = {};

controller.getAll = (req, res) => {
    service.all().then((list) => {
        res.send(list);
    });
};

controller.insert = (req, res) => {
    const created_at = new Date().toISOString();
    let temp = {
        adverseReactions: [],
        advice: [],
        color: req.body.color[0].value,
        colorCode: '',
        brandName: req.body.brandName[0].value,
        contraindications: [],
        dosage: [],
        form: req.body.form[0].value,
        genericName: req.body.genericName[0].value,
        imprint: req.body.imprint[0].value,
        indications: [],
        interactions: [],
        mimsClass: req.body.mimsClass[0].value,
        presentation: req.body.presentation[0].value,
        presentationPack: req.body.presentationPack[0].value,
        initialThaiFDA: '',
        thaiFDAEN: '',
        thaiFDATH: req.body.thaiFDATH[0].value,
        usFDA: req.body.usFDA[0].value,
        warning:[],
        registrationNumber: req.body.registrationNumber,
        numberFD: req.body.numberFD,
        allowFacturer: req.body.allowFacturer[0].value,
        manuFacturer: req.body.manuFacturer[0].value,
        distributor: req.body.distributor[0].value,
        marketer: req.body.marketer[0].value,
        created_at: created_at
    };
    for (let i = 0; i < req.body.adverseReactions.length;i++){
        temp.adverseReactions.push(req.body.adverseReactions[i].value)
    }
    for (let i = 0; i < req.body.advice.length;i++){
        temp.advice.push(req.body.advice[i].value)
    }
    for (let i = 0; i < req.body.contraindications.length;i++){
        temp.contraindications.push(req.body.contraindications[i].value)
    }
    for (let i = 0; i < req.body.dosage.length;i++){
        temp.dosage.push(req.body.dosage[i].value)
    }
    for (let i = 0; i < req.body.indications.length;i++){
        temp.indications.push(req.body.indications[i].value)
    }
    for (let i = 0; i < req.body.interactions.length;i++){
        temp.interactions.push(req.body.interactions[i].value)
    }
    for (let i = 0; i < req.body.warning.length;i++){
        temp.warning.push(req.body.warning[i].value)
    }
    console.log(temp)
    service.insert(req.body);
    res.send();
};

controller.update = (req, res) => {
    service.update(req.params.id, req.body).then((data) => {
        res.json(data);
    });
};

controller.destroy = (req, res) => {
    service.delete(req.params.id).then(() => {
        res.json("200");
    });
};

module.exports = controller;