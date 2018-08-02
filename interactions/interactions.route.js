const express = require('express');
const router = express.Router();
const controller = require('./interactions.controller')

router.get('/interactions', controller.getAll);
router.post('/interactions', controller.insert);
router.put( "/interactions/:id", controller.update );
router.delete( "/interactions/:id", controller.destroy );

module.exports = router;                 