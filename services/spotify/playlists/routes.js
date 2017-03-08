var express = require('express');
var router = express.Router();
var controller  = require('./controller')();

router.route('/playlist')
    // GET spotify/playlist
    .get(controller.get);

module.exports = router;
