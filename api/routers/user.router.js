
const path = require('path');
const express = require('express');

const router = express.Router();
const models = require(__dirname + '/../../models/index.js');

router.get('/users', (req, res) => {
    res.send({done: 'Hello'});
});

router.post('/users', (req, res) => {

    models.User.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
        userId: 1
    }).then(user => {
        res.json(user);
    });

});

module.exports = router;