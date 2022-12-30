const router = require('express').Router();
const { User } = require('../../models');

// GET USERS
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        res.status(500).json(err);
    });
});

// CREATE USER
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json(userData);
        });
    });
});

// LOGIN ROUTE
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(userData => {
        if(!userData) {
            res.status(400).json({ message: 'No user associated with that username.' });
            return;
        }

        // PASSWORD VALIDATION
        const validPassword = userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in.' });
        });
    });
});

// LOGOUT ROUTE
router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;