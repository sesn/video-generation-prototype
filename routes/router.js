const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const parent_path = path.dirname(__dirname);

//Controller modules
const json_controller = require('../controllers/JsonDataController');

// GET route for reading data
router.get('/', function(req, res, next) {
    return res.sendFile(path.join(__dirname + '/templates/index.html'));
});

router.get('/home', json_controller.prototype_send_data);


module.exports = router;