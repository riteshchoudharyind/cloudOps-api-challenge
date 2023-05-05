const express = require('express');
const router = express.Router();

router.post('/users', (req, res) => {
  console.log("in user post router");
});

router.get('/users', (req, res) => {
  console.log("in user get router");
});

router.get('/users/:id', (req, res) => {
  console.log("in user get router with id");
});




module.exports = router;
