var express = require('express');
var router = express.Router();
var group = require('./group');

router.use('/group', group);

module.exports = router;