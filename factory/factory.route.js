const express = require('express');
const router = express.Router();
const controller = require('./factory.controller')

router.get('/factory', controller.getAll);
router.post('/factory', controller.insert);
router.put( "/factory/:id", controller.update );
router.delete( "/factory/:id", controller.destroy );

module.exports = router;                 