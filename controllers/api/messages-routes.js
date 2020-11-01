const router = require('express').Router();
const { Message } = require('../../models');
const withAuth = require('../../utils/auth');

// display all messages
router.get('/', withAuth, (req, res) => {
    Message.findAll()
        .then(commentData => res.json(messageData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post a message
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Message.create({
                message_text: req.body.message_text,
                user_id: req.body.user_id,
                conversation_id: req.body.conversation_id
            })
            .then(newMessageData => res.json(newMessageData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});

module.exports = router;