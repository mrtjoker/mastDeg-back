const express = require('express');
const router = express.Router();
const controller = require('./generic-name.controller')

router.get('/generic-name', controller.getAll);
router.post('/generic-name', controller.insert);
router.put( "/generic-name/:id", controller.update );
router.delete( "/generic-name/:id", controller.destroy );

module.exports = router;                 