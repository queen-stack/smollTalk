const router = require('express').Router();

const userRoutes = require('./user-routes');
const conversationRoutes = require('./conversation-routes');
const messagesRoutes = require('./messages-routes');

// routes all api content
router.use('/users', userRoutes);
router.use('/conversations', conversationRoutes)
router.use('/messages', messagesRoutes);

module.exports = router;