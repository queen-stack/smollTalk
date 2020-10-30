const router = require('express').Router();
const { Message } = require('../../models');

// display all messages
router.get('/', (req, res) => {
    Message.findAll()
        .then(commentData => res.json(messageData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;