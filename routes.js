const express = require('express');
const FriendController = require('../controller/FriendController');

const router = express.Router();

router.get('/friends', FriendController.listarFriends);

// Outras rotas aqui

module.exports = router;