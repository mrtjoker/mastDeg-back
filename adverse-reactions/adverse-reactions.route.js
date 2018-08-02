const express = require('express');
const router = express.Router();
const controller = require('./adverse-reactions.controller')

router.get('/adverse-reactions', controller.getAll);
router.post('/adverse-reactions', controller.insert);
router.put( "/adverse-reactions/:id", controller.update );
router.delete( "/adverse-reactions/:id", controller.destroy );

module.exports = router;                 