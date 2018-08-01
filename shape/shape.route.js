const express = require('express');
const router = express.Router();
const controller = require('./shape.controller')

router.get('/shape', controller.getAll);
router.post('/shape', controller.insert);
router.put( "/shape/:id", controller.update );
router.delete( "/shape/:id", controller.destroy );

module.exports = router;                 