/*jshint esversion: 6*/
const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const products = require('./routes/products.js');
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended:true}));
app.use('/products', products);

const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});