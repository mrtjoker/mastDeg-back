const service = require('./factory.service');
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

module.exports = controller;