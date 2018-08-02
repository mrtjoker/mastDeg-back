const express = require('express');
const router = express.Router();
const controller = require('./mims.controller')

router.get('/mims', controller.getAll);
router.post('/mims', controller.insert);
router.put( "/mims/:id", controller.update );
router.delete( "/mims/:id", controller.destroy );

module.exports = router;                 