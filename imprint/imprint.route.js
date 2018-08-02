const express = require('express');
const router = express.Router();
const controller = require('./imprint.controller')

router.get('/imprint', controller.getAll);
router.post('/imprint', controller.insert);
router.put( "/imprint/:id", controller.update );
router.delete( "/imprint/:id", controller.destroy );

module.exports = router;                 