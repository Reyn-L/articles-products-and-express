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

router.put('/:id', (req, res) => {
// console.log(req.params.id);
let update = products.edit(req.params.id);
update.name = req.body.name;
update.price = req.body.price;
update.inventory = req.body.inventory;
res.send(200);
// console.log(req.body);
// res.render('products/:id');
});

module.exports = router;