const express = require('express');
const router = express.Router();
const controller = require('./thai-fda.controller')

router.get('/thai-fda', controller.getAll);
router.post('/thai-fda', controller.insert);
router.put( "/thai-fda/:id", controller.update );
router.delete( "/thai-fda/:id", controller.destroy );

module.exports = router;                 