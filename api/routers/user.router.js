
const path = require('path');
const express = require('express');

const router = express.Router();
const models = require(__dirname + '/../../models/index.js');

router.get('/users', (req, res) => {
    res.send({done: 'Hello'});
});

router.post('/users', (req, res) => {
    
    models.usuarios.create({
        usuario: req.body
    }).then(usuario => {
        res.json(usuario);
    }).catch(err => {
        res.json(err);
    });

});

module.exports = router;