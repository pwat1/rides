var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Request = require('../models/request.model');
var passport = require('passport');

// RETURNS ALL THE REQUESTS IN THE DATABASE
router.get('/', function (req, res) {
    Request.find({}, function (err, reqs) {
        if (err) return res.status(500).send("There was a problem finding the requests.");
        res.status(200).send(reqs);
    });
});

// single request
router.get('/:id', function (req, res) {
    Request.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the request.");
        if (!user) return res.status(404).send("No request found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Request.findByIdAndRemove(req.params.id, function (err, reqs) {
        if (err) return res.status(500).send("There was a problem deleting the request.");
        res.status(200).send("Request from "+ reqs.firstName +" was deleted.");
    });
});

// UPDATES A SINGLE REQUEST IN THE DATABASE
router.put('/:id', function (req, res) {
    Request.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, reqs) {
        if (err) return res.status(500).send("There was a problem updating the request.");
        res.status(200).send(reqs);
    });
});

module.exports = router;