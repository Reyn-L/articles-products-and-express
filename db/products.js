/*jshint esversion: 6*/
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

  find(number) {
    let findId = this.collection.filter((idNum) => {
      return idNum.id === number.id;
    });
    console.log(findId);
  }
}

module.exports = ProductCollector;