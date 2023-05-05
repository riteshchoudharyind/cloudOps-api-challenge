const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.post('/users', users.postUser);

router.get('/users', users.getUsers);

router.get('/users/:id', (req, res) => {
  console.log("in user get router with id");
});




module.exports = router;
