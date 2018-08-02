const express = require('express');
const router = express.Router();
const controller = require('./color.controller')

router.get('/color', controller.getAll);
router.post('/color', controller.insert);
router.put( "/color/:id", controller.update );
router.delete( "/color/:id", controller.destroy );

module.exports = router;                 