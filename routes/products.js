/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();

router.post('/products', (req, res) => {
  res.send("test test testing 1 2 3");
});
module.exports = router;