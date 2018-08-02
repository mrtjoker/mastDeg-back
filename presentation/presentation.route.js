const express = require('express');
const router = express.Router();
const controller = require('./presentation.controller')

router.get('/presentation', controller.getAll);
router.post('/presentation', controller.insert);
router.put( "/presentation/:id", controller.update );
router.delete( "/presentation/:id", controller.destroy );

module.exports = router;                 