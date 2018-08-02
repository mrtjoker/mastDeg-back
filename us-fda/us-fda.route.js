const express = require('express');
const router = express.Router();
const controller = require('./us-fda.controller')

router.get('/us-fda', controller.getAll);
router.post('/us-fda', controller.insert);
router.put( "/us-fda/:id", controller.update );
router.delete( "/us-fda/:id", controller.destroy );

module.exports = router;                 