const User = require('./user');
const Message = require('./message');
const Conversation = require('./conversation');

User.hasMany(Message, {
    foreignKey: 'user_id'
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

Conversation.hasMany(Message, {
    foreignKey: 'conversation_id'
});

Message.belongsTo(Conversation);


module.exports = { User, Message, Conversation };
