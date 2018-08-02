const express = require('express');
const router = express.Router();
const controller = require('./dosage.controller')

router.get('/dosage', controller.getAll);
router.post('/dosage', controller.insert);
router.put( "/dosage/:id", controller.update );
router.delete( "/dosage/:id", controller.destroy );

module.exports = router;                 