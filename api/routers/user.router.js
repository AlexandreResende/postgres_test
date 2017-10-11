
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send({done: 'Hello'});
});

module.exports = router;