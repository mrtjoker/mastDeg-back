const service = require('./medicines.service');
const controllerColor = require('../color/color.controller');
const controllerBrand = require('../brand-name/brand-name.controller');
const controlledForm = require('../form/form.controller');
const controllerGeneric = require('../generic-name/generic-name.controller');
const controllerImprint = require('../imprint/imprint.controller');
const controllerShape = require('../shape/shape.controller');
const controllerMims = require('../mims/mims.controller');
const controllerPresentation = require('../presentation/presentation.controller');
const controllerPresentationPack = require('../presentation-pack/presentation-pack.controller');
const controllerThaiFDA = require('../thai-fda/thai-fda.controller');
const controllerUsFDA = require('../us-fda/us-fda.controller');
const controllerFactory = require('../factory/factory.controller');
const controllerAdverseReactions = require('../adverse-reactions/adverse-reactions.controller');
const controllerAdvice = require('../advice/advice.controller');
const controllerContraindications = require('../contraindications/contraindications.controller');
const controllerDosage = require('../dosage/dosage.controller');
const controllerIndications = require('../indications/indications.controller');
const controllerInteractions = require('../interactions/interactions.controller');
const controllerWarning = require('../warning/warning.controller');
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
        initialThaiFDA: req.body.initialThaiFDA[0].value,
        thaiFDAEN: '',
        thaiFDATH: '',
        usFDA: req.body.usFDA[0].value,
        warning: [],
        registrationNumber: req.body.registrationNumber,
        numberFD: req.body.numberFD,
        factory: [],
        allowFacturer: req.body.allowFacturer[0].value,
        manuFacturer: req.body.manuFacturer[0].value,
        distributor: req.body.distributor[0].value,
        marketer: req.body.marketer[0].value,
        created_at: created_at
    };
    for (let i = 0; i < req.body.adverseReactions.length; i++) {
        if (req.body.adverseReactions[i].value !== undefined)
            temp.adverseReactions.push(req.body.adverseReactions[i].value)
    }
    for (let i = 0; i < req.body.advice.length; i++) {
        if (req.body.advice[i].value !== undefined)
            temp.advice.push(req.body.advice[i].value)
    }
    for (let i = 0; i < req.body.contraindications.length; i++) {
        if (req.body.contraindications[i].value !== undefined)
            temp.contraindications.push(req.body.contraindications[i].value)
    }
    for (let i = 0; i < req.body.dosage.length; i++) {
        if (req.body.dosage[i].value !== undefined)
            temp.dosage.push(req.body.dosage[i].value)
    }
    for (let i = 0; i < req.body.indications.length; i++) {
        if (req.body.indications[i].value !== undefined)
            temp.indications.push(req.body.indications[i].value)
    }
    for (let i = 0; i < req.body.interactions.length; i++) {
        if (req.body.interactions[i].value !== undefined)
            temp.interactions.push(req.body.interactions[i].value)
    }
    for (let i = 0; i < req.body.warning.length; i++) {
        if (req.body.warning[i].value !== undefined)
            temp.warning.push(req.body.warning[i].value)
    }
    service.insert(req.body);
    res.send();
    controllerColor.checkInsert(req.body.color[0].value);
    controllerBrand.checkInsert(req.body.brandName[0].value);
    controlledForm.checkInsert(req.body.form[0].value);
    controllerGeneric.checkInsert(req.body.genericName[0].value);
    controllerImprint.checkInsert(req.body.imprint[0].value);
    controllerShape.checkInsert(req.body.shape[0].value);
    controllerMims.checkInsert(req.body.mimsClass[0].value);
    controllerPresentation.checkInsert(req.body.presentation[0].value);
    controllerPresentationPack.checkInsert(req.body.presentationPack[0].value);
    controllerThaiFDA.checkInsert(req.body.initialThaiFDA[0].value);
    controllerUsFDA.checkInsert(req.body.usFDA[0].value);
    if (req.body.allowFacturer[0].value !== undefined)
        controllerFactory.checkInsert(req.body.allowFacturer[0].value);
    if (req.body.manuFacturer[0].value !== undefined)
        controllerFactory.checkInsert(req.body.manuFacturer[0].value);
    if (req.body.distributor[0].value !== undefined)
        controllerFactory.checkInsert(req.body.distributor[0].value);
    if (req.body.marketer[0].value !== undefined)
        controllerFactory.checkInsert(req.body.marketer[0].value);
    for (let i = 0; i < req.body.adverseReactions.length; i++) {
        controllerAdverseReactions.checkInsert(req.body.adverseReactions[i].value);
    }
    for (let i = 0; i < req.body.advice.length; i++) {
        controllerAdvice.checkInsert(req.body.advice[i].value);
    }
    for (let i = 0; i < req.body.contraindications.length; i++) {
        controllerContraindications.checkInsert(req.body.contraindications[i].value);
    }
    for (let i = 0; i < req.body.dosage.length; i++) {
        controllerDosage.checkInsert(req.body.dosage[i].value);
    }
    for (let i = 0; i < req.body.indications.length; i++) {
        controllerIndications.checkInsert(req.body.indications[i].value);
    }
    for (let i = 0; i < req.body.interactions.length; i++) {
        controllerInteractions.checkInsert(req.body.interactions[i].value);
    }
    for (let i = 0; i < req.body.warning.length; i++) {
        controllerWarning.checkInsert(req.body.warning[i].value);
    }
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