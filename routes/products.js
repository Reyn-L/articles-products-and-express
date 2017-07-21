/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const products = require('../db/products.js') ;

router.post('/', (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let inventory = req.body.inventory;
  //products.push({currentId, name, price, inventory});
  // console.log(saveProduct);
  res.render('products');
});

router.post('/new', (req, res) => {
  res.render('/products/new');
});

// router.put('/products/:id', (req, res) => {

// });



module.exports = router;