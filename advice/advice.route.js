const express = require('express');
const router = express.Router();
const controller = require('./advice.controller')

router.get('/advice', controller.getAll);
router.post('/advice', controller.insert);
router.put( "/advice/:id", controller.update );
router.delete( "/advice/:id", controller.destroy );

module.exports = router;                 