const express = require('express');
const router = express.Router();
const controller = require('./indications.controller')

router.get('/indications', controller.getAll);
router.post('/indications', controller.insert);
router.put( "/indications/:id", controller.update );
router.delete( "/indications/:id", controller.destroy );

module.exports = router;                 