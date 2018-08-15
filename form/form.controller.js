const service = require('./form.service');
controller = {};

controller.getAll = (req, res) => {
    service.all().then((list) => {
        res.send(list);
    });
};

controller.insert = (req, res) => {
    const created_at = new Date().toISOString();
    service.insert(req.body, created_at);
    res.send();
};

controller.update = ( req, res ) => {
    service.update( req.params.id , req.body ).then( ( data ) => { 
        res.json( data ); 
    } );
};

controller.destroy = ( req, res ) => {
    service.delete( req.params.id ).then( () => { 
        res.json( "200" ); 
    } );
};

controller.checkInsert = (data) => {
    (async () => {
        let value = { form: data };
        let list = await service.all();
        let check = false;
        const created_at = new Date().toISOString();
        for (let i = 0; i < list.length; i++) {
            if (data === list[i].form)
                check = await true;
        }
        if (check === false) {
            service.insert(value, created_at);
        };
    })();
}

module.exports = controller;