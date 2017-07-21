/*jshint esversion: 6*/
const findsById = require('../utils/utility.js');
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

  find() {
    findsById();
  }

  edit(product) {
    findsById();

  }
}

module.exports = ProductCollector;
    // if(this.collection.indexOf(number.id) > -1) {
    //   return number.id;
    // } else {
    //   return "ID not found";
    // }