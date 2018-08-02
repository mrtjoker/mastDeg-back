const express = require('express');
const router = express.Router();
const controller = require('./brand-name.controller')

router.get('/brand-name', controller.getAll);
router.post('/brand-name', controller.insert);
router.put( "/brand-name/:id", controller.update );
router.delete( "/brand-name/:id", controller.destroy );

module.exports = router;                 