const express = require('express');
const router = express.Router();
const controller = require('./warning.controller')

router.get('/warning', controller.getAll);
router.post('/warning', controller.insert);
router.put( "/warning/:id", controller.update );
router.delete( "/warning/:id", controller.destroy );

module.exports = router;                 