/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Products = require('../db/products.js') ;
const products = new Products();

router.post('/', (req, res) => {
  if(products.add(req.body)) {
    res.render('products');
  } else {
    res.redirect('/products/new');
  }
});

router.post('/new', (req, res) => {
  res.render('/products/new');
});

router.get('/', (req, res) => {
res.send(products.findAll());
});

// router.put('/products/:id', (req, res) => {

// });

module.exports = router;