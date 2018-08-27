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

checkUndefined = (data) => {
    const created_at = new Date().toISOString();
    let temp = {
        adverseReactions: [],
        advice: [],
        color: '-',
        colorCode: '-',
        brandName: '-',
        contraindications: [],
        dosage: [],
        form: '-',
        genericName: '-',
        imprint: '-',
        shape: '-',
        indications: [],
        interactions: [],
        mimsClass: '-',
        presentation: '-',
        presentationPack: '-',
        initialThaiFDA: '-',
        thaiFDAEN: '-',
        thaiFDATH: '-',
        usFDA: '-',
        warning: [],
        registrationNumber: '-',
        numberFD: '-',
        factory: [],
        allowFacturer: '-',
        manuFacturer: '-',
        distributor: '-',
        marketer: '-',
        created_at: created_at
    };
    if (data.color.length > 0)
        temp.color = data.color[0].value;
    if (data.brandName.length > 0)
        temp.brandName = data.brandName[0].value;
    if (data.form.length > 0)
        temp.form = data.form[0].value;
    if (data.genericName.length > 0)
        temp.genericName = data.genericName[0].value;
    if (data.imprint.length > 0)
        temp.imprint = data.imprint[0].value;
    if (data.shape.length > 0)
        temp.shape = data.shape[0].value;
    if (data.mimsClass.length > 0)
        temp.mimsClass = data.mimsClass[0].value;
    if (data.presentation.length > 0)
        temp.presentation = data.presentation[0].value;
    if (data.presentationPack.length > 0)
        temp.presentationPack = data.presentationPack[0].value;
    if (data.initialThaiFDA.length > 0)
        temp.initialThaiFDA = data.initialThaiFDA[0].value;
    if (data.usFDA.length > 0)
        temp.usFDA = data.usFDA[0].value;
    if (data.registrationNumber !== undefined)
        temp.registrationNumber = data.registrationNumber;
    if (data.numberFD !== undefined)
        temp.numberFD = data.numberFD;
    if (data.allowFacturer.length > 0)
        temp.allowFacturer = data.allowFacturer[0].value;
    if (data.manuFacturer.length > 0)
        temp.manuFacturer = data.manuFacturer[0].value;
    if (data.distributor.length > 0)
        temp.distributor = data.distributor[0].value;
    if (data.marketer.length > 0)
        temp.marketer = data.marketer[0].value;
    for (let i = 0; i < data.adverseReactions.length; i++)
        temp.adverseReactions.push(data.adverseReactions[i].value)
    for (let i = 0; i < data.advice.length; i++)
        temp.advice.push(data.advice[i].value)
    for (let i = 0; i < data.contraindications.length; i++)
        temp.contraindications.push(data.contraindications[i].value)
    for (let i = 0; i < data.dosage.length; i++)
        temp.dosage.push(data.dosage[i].value)
    for (let i = 0; i < data.indications.length; i++)
        temp.indications.push(data.indications[i].value)
    for (let i = 0; i < data.interactions.length; i++)
        temp.interactions.push(data.interactions[i].value)
    for (let i = 0; i < data.warning.length; i++)
        temp.warning.push(data.warning[i].value)
    return temp;
};

insertBasicData = (temp) => {
    controllerColor.checkInsert(temp.color);
    controllerBrand.checkInsert(temp.brandName);
    controlledForm.checkInsert(temp.form);
    controllerGeneric.checkInsert(temp.genericName);
    controllerImprint.checkInsert(temp.imprint);
    controllerShape.checkInsert(temp.shape);
    controllerMims.checkInsert(temp.mimsClass);
    controllerPresentation.checkInsert(temp.presentation);
    controllerPresentationPack.checkInsert(temp.presentationPack);
    controllerThaiFDA.checkInsert(temp.initialThaiFDA);
    controllerUsFDA.checkInsert(temp.usFDA);
    controllerFactory.checkInsert(temp.allowFacturer);
    controllerFactory.checkInsert(temp.manuFacturer);
    controllerFactory.checkInsert(temp.distributor);
    controllerFactory.checkInsert(temp.marketer);
    for (let i = 0; i < temp.adverseReactions.length; i++)
        controllerAdverseReactions.checkInsert(temp.adverseReactions[i]);
    for (let i = 0; i < temp.advice.length; i++)
        controllerAdvice.checkInsert(temp.advice[i]);
    for (let i = 0; i < temp.contraindications.length; i++)
        controllerContraindications.checkInsert(temp.contraindications[i]);
    for (let i = 0; i < temp.dosage.length; i++)
        controllerDosage.checkInsert(temp.dosage[i]);
    for (let i = 0; i < temp.indications.length; i++)
        controllerIndications.checkInsert(temp.indications[i]);
    for (let i = 0; i < temp.interactions.length; i++)
        controllerInteractions.checkInsert(temp.interactions[i]);
    for (let i = 0; i < temp.warning.length; i++)
        controllerWarning.checkInsert(temp.warning[i]);
};

controller.insert = (req, res) => {
    let temp = checkUndefined(req.body);
    service.insert(temp);
    res.send();
    insertBasicData(temp);
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

checkSearchExact = (searchData) => {
    (async () => {
        let list = [];
        let tmp = {};
        let val = {};
        if (searchData.brandName.length > 0)
            tmp.brandName = searchData.brandName[0].value;
        if (searchData.genericName.length > 0)
            tmp.genericName = searchData.genericName[0].value;
        if (searchData.thaiFDA.length > 0)
            tmp.thaiFDA = searchData.thaiFDA[0].value;
        if (searchData.form.length > 0)
            tmp.form = searchData.form[0].value;
        if (searchData.shape.length > 0)
            tmp.shape = searchData.shape[0].value;
        if (searchData.color.length > 0)
            tmp.color = searchData.color[0].value;
        if (searchData.mimsClass.length > 0)
            tmp.mimsClass = searchData.mimsClass[0].value;
        if (searchData.scoring.length > 0)
            tmp.scoring = searchData.scoring[0].value;
        if (searchData.logo.length > 0)
            tmp.logo = searchData.logo[0].value;
        if (searchData.marking.length > 0)
            tmp.marking = searchData.marking[0].value;
        if (searchData.manufacturer.length > 0)
            tmp.manufacturer = searchData.manufacturer[0].value;
        
        list = await service.searchExact(tmp);
        console.log(list.length)
    })();
};

controller.search = (req, res) => {
    //approximate
    // (async () => {
    //     let list = [];
    //     let brandName = [];
    //     let genericName = [];
    //     let thaiFDA = [];
    //     let form = [];
    //     let shape = [];
    //     let color = [];
    //     let mimsClass = [];
    //     let scoring = [];
    //     let logo = [];
    //     let marking = [];
    //     let manufacturer = [];
    //     if (req.body.brandName.length > 0)
    //         brandName = await service.searchBrand(req.body.brandName[0].value);
    //     if (req.body.genericName.length > 0)
    //         genericName = await service.searchGeneric(req.body.genericName[0].value);
    //     if (req.body.thaiFDA.length > 0)
    //         thaiFDA = await service.searchThaiFDA(req.body.thaiFDA[0].value);
    //     if (req.body.form.length > 0)
    //         form = await service.searchForm(req.body.form[0].value);
    //     if (req.body.shape.length > 0)
    //         shape = await service.searchShape(req.body.shape[0].value);
    //     if (req.body.color.length > 0)
    //         color = await service.searchColor(req.body.color[0].value);
    //     if (req.body.mimsClass.length > 0)
    //         mimsClass = await service.searchMims(req.body.mimsClass[0].value);
    //     if (req.body.scoring.length > 0)
    //         scoring = await service.searchScoring(req.body.scoring[0].value);
    //     if (req.body.logo.length > 0)
    //         logo = await service.searchLogo(req.body.logo[0].value);
    //     if (req.body.marking.length > 0)
    //         marking = await service.searchMarking(req.body.marking[0].value);
    //     if (req.body.manufacturer.length > 0)
    //         manufacturer = await service.searchManufacturer(req.body.manufacturer[0].value);
    //     for (let i = 0; i < brandName.length; i++)
    //         list.push(await brandName[i]);
    //     for (let i = 0; i < genericName.length; i++)
    //         list.push(await genericName[i]);
    //     for (let i = 0; i < thaiFDA.length; i++)
    //         list.push(await thaiFDA[i]);
    //     for (let i = 0; i < form.length; i++)
    //         list.push(await form[i]);
    //     for (let i = 0; i < shape.length; i++)
    //         list.push(await shape[i]);
    //     for (let i = 0; i < color.length; i++)
    //         list.push(await color[i]);
    //     for (let i = 0; i < mimsClass.length; i++)
    //         list.push(await mimsClass[i]);
    //     for (let i = 0; i < scoring.length; i++)
    //         list.push(await scoring[i]);
    //     for (let i = 0; i < logo.length; i++)
    //         list.push(await logo[i]);
    //     for (let i = 0; i < marking.length; i++)
    //         list.push(await marking[i]);
    //     for (let i = 0; i < manufacturer.length; i++)
    //         list.push(await manufacturer[i]);
    //     res.send(list);
    // })();
    //Exact
    checkSearchExact(req.body);

}
module.exports = controller;