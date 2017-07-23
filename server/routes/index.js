var express = require('express');
var User = require('../models/user.model');
var passport = require('passport');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

// CREATES A USER IN THE DATABASE
router.post('/register', function (req, res) {
    User.register(new User ({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      canDrive: req.body.canDrive,
    }), req.body.password, 
    function (err, user) {
        if (err) return res.status(500).send(err);
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
        //res.status(200).send(user);
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;