const express = require('express');
const router = express.Router();
const controller = require('./form.controller')

router.get('/form', controller.getAll);
router.post('/form', controller.insert);
router.put( "/form/:id", controller.update );
router.delete( "/form/:id", controller.destroy );

module.exports = router;                 