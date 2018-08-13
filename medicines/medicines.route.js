const express = require('express');
const router = express.Router();
const controller = require('./medicines.controller')

router.get('/medicines', controller.getAll);
router.post('/medicines', controller.insert);
router.put( "/medicines/:id", controller.update );
router.delete( "/medicines/:id", controller.destroy );

module.exports = router;                 