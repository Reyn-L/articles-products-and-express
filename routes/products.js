/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Products = require('../db/products.js') ;
const db = require('../connect.js');
const products = new Products();
let find = {product: products.findAll()};

router.route('/')

.post((req, res) => {

  db.any(
    'INSERT INTO products(name, price, inventory) VALUES($1, $2, $3)',
    [req.body.name, Number(req.body.price), Number(req.body.inventory)]
    )
  .then((products) => {
    res.redirect('/products');

  })
  .catch((err) => {
    console.log(err);
    res.redirect('/products/new');
  });

})

.get((req, res) => {
  db.any('SELECT * FROM products')
  .then((products) => {
    //console.log(products);
    res.render('products/index');
  });
});

router.get('/new', (req, res) => {
  res.render('products/new');
});

router.get('/:id/edit', (req, res) => {
  res.render('products/edit');
});

router.route('/:id')

.get((req, res) => {
  db.any(
    'SELECT name, price, inventory FROM products WHERE id = $1',
    Number([req.params.id]))
  .then((products) => {
    console.log(products);
    res.render('products/index');
  })
  .catch((err) => {
    console.log(err);
  });
})

.put((req, res) => {
  console.log("put",req.body);
  db.any('UPDATE products SET name = $1, price = $2, inventory = $3 WHERE id = $4',
    [req.body.name, req.body.price, Number(req.body.inventory), req.params.id])
  .then((products) => {

    res.redirect('/products/' + req.params.id);
  })
  .catch((err) => {
    console.log("its me", err);
    res.redirect('/products/:id/edit');
  });
  // const update = products.edit(req.params.id);
  // if(update){
  //   update.name = req.body.name;
  //   update.price = req.body.price;
  //   update.inventory = req.body.inventory;
  // } else {
  // }
})

.delete((req, res) => {
  console.log(req.params.id);
  db.any('DELETE FROM products WHERE id = $1', [req.params.id])
  .then((products) => {
    res.redirect('/products');
  })
  .catch((err) => {
    console.log(err);
    res.redirect('/products:id');
  });


  // const deleteProduct = products.delete(req.params.id);
  // if(deleteProduct) {
  // } else {
  // }
});

module.exports = router;