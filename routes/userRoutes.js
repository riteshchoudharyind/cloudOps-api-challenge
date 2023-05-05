const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.post('/users', users.postUser);
router.get('/users', users.getUsers);
router.get('/users/:id', users.getUserById);

module.exports = router;

