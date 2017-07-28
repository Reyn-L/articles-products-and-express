/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const db = require('../connect.js');

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
    res.render('products/index', {products: products});

  });
});

router.get('/new', (req, res) => {
  res.render('products/new');
});

router.get('/:id/edit', (req, res) => {
  db.any('SELECT * FROM products WHERE id = $1', Number([req.params.id]))
  .then((products) => {
    console.log(products);
    res.render('products/edit', products[0]);
  });
});


router.route('/:id')

.get((req, res) => {
  db.any(
    'SELECT name, price, inventory FROM products WHERE id = $1',
    Number([req.params.id]))
  .then((products) => {
    res.render('products/product', products[0]);
  })
  .catch((err) => {
    console.log(err);
  });
})

.put((req, res) => {
  db.any('UPDATE products SET name = $1, price = $2, inventory = $3 WHERE id = $4',
    [req.body.name, req.body.price, Number(req.body.inventory), req.params.id])
  .then((products) => {

    res.redirect('/products/' + req.params.id);
  })
  .catch((err) => {
    console.log(err);
    res.redirect('/products/' + req.params.id + '/edit');
  });
})
.delete((req, res) => {
  db.any('DELETE FROM products WHERE id = $1', [req.params.id])
  .then((products) => {
    res.redirect('/products');
  })
  .catch((err) => {
    console.log(err);
    res.redirect('/products:id');
  });
});

module.exports = router;