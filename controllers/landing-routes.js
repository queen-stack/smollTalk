const router = require('express').Router();
const { response } = require('express');
const sequelize = require('../config/connection');
const { Conversation, User, Message } = require('../models');

// routes the user back to homepage if they are already logged in
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
        return;
    }

    res.render('landing');
});

// creates new user profile
router.post('/', (req, res) => {
    User.create({
            username: req.body.username,
            linkedin: req.body.linkedin,
            twitter: req.body.twitter,
            github: req.body.github,
            email: req.body.email,
            password: req.body.password
        })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.linkedin = dbUserData.linkedin;
                req.session.twitter = dbUserData.twitter;
                req.session.github = dbUserData.github;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;

                res.json(dbUserData);
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;