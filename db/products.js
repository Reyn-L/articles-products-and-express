/*jshint esversion: 6*/
const findsIndex = require('../utils/utility.js');
class ProductCollector {
  constructor() {
    this.currentId = 0;
    this.collection = [];
  }
  add(dataObj) {
    let dupCheck = this.collection.every((product) => {
      return product.name !== dataObj.name;
    });

    if(dupCheck === true) {
       Object.assign(dataObj,{id: this.currentId++});
      this.collection.push(dataObj);
      return this.collection;
    } else {
      return false;
    }
  }

  findAll() {
    return this.collection;
  }

  find(id) {
    let index = findsIndex(id, this.collection);
  }

  edit(id) {
    let index = findsIndex(id, this.collection);
    let item = this.collection[index];
   // console.log(item);
   return item;
  }

  delete(id) {
    let index = findsIndex(id, this.collection);
    let newProducts = this.collection.splice(index, 1);
    return newProducts;
  }
}

module.exports = ProductCollector;
