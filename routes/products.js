/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Products = require('../db/products.js') ;
const products = new Products();
let find = {product: products.findAll()};

router.route('/')

.post((req, res) => {
  const addProduct = products.add(req.body);
  if(addProduct){
    res.redirect('/products/products');
  } else {
    res.redirect('/products/new');
  }
})

.get((req, res) => {
console.log(find);
  res.render('products/index',find);
});

router.get('/new', (req, res) => {
  res.render('products/new');
});

router.get('/:id/edit', (req, res) => {
  res.render('products/edit');
});

router.route('/:id')

.get((req, res) => {
  res.render('products/products');
})

.put((req, res) => {
  const update = products.edit(req.params.id);
  if(update){
    update.name = req.body.name;
    update.price = req.body.price;
    update.inventory = req.body.inventory;
    res.redirect('/products/:id');
  } else {
    res.redirect('/products/:id/edit');
  }
})

.delete((req, res) => {
  const deleteProduct = products.delete(req.params.id);
  if(deleteProduct) {
    res.redirect('/products');
  } else {
    res.redirect('/products/:id');
  }
});

module.exports = router;