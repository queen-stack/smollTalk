const router = require('express').Router();
const { Conversation, Message, User } = require('../../models');

router.get('/', (req, res) => {
  Conversation.findAll({})
  .then(conversationData => res.json(conversationData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one conversation by its `id` value
  Conversation.findOne({
    where: {
      id: req.params.id
    },
    //including its associated Message data
    include: {
      model: Message,
      include: {
          // including associated User data
          model: User,
          attributes: ['username']
      }
    }
  })
  .then(conversationData => {
    if(!categoryData) {
      res.status(400).json({ message: 'Not found'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
