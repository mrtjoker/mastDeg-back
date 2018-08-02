const express = require('express');
const router = express.Router();
const controller = require('./presentation-pack.controller')

router.get('/presentation-pack', controller.getAll);
router.post('/presentation-pack', controller.insert);
router.put( "/presentation-pack/:id", controller.update );
router.delete( "/presentation-pack/:id", controller.destroy );

module.exports = router;                 