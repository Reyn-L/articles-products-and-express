/*jshint esversion: 6*/

class Products {
  constructor() {
    this.currentId = 0;
    this.saveProducts = [];
  }
  add(dataObj) {
    dataObj.id = ++this.currentId;
    saveProducts.push(dataObj);
  }
}
