const router = require('express').Router();
// const { response } = require('express');
const sequelize = require('../config/connection');
const { Conversation, User, Message } = require('../models');

// presents each topic with the count of messages
router.get('/', (req, res) => {
    Conversation.findAll({
            attributes: [
                'id',
                'topic_name', [sequelize.literal('(SELECT COUNT(*) FROM message WHERE conversation.id = message.conversation_id)'), 'message_count']
            ]
        })
        .then(conversationData => {
            // pass a single conversation object into the homepage template
            const conversations = conversationData.map(conversation => conversation.get({ plain: true }));
            res.render('homepage', {
                conversations,
                loggedIn: req.session.loggedIn
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/conversation/:id', (req, res) => {
    Conversation.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'topic_name', [sequelize.literal('(SELECT COUNT(*) FROM message WHERE conversation.id = message.conversation_id)'), 'message_count']
            ],
            include: [{
                model: Message,
                attributes: ['id', 'message_text', 'conversation_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }]
        })
        .then(conversationData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id ' });
                return;
            }
            const conversation = conversationData.get({ plain: true });

            res.render('placeholder', {
                conversation,
                loggedIn: req.session.loggedIn

            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;