const express = require('express');
const router = express.Router();
const controller = require('./contraindications.controller')

router.get('/contraindications', controller.getAll);
router.post('/contraindications', controller.insert);
router.put( "/contraindications/:id", controller.update );
router.delete( "/contraindications/:id", controller.destroy );

module.exports = router;                 