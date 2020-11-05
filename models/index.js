const User = require('./User');
const Message = require('./Message');
const Conversation = require('./Conversation');

User.hasMany(Message, {
    foreignKey: 'user_id'
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

Conversation.hasMany(Message, {
    foreignKey: 'conversation_id'
});

Message.belongsTo(Conversation, {
    foreignKey: 'conversation_id'
});


module.exports = { User, Message, Conversation };
