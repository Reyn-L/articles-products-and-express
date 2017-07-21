/*jshint esversion: 6*/
function findsById(id, collection) {
  let findId = collection.findIndex((product,index) => {
    if(product.id > -1){
      return index;
    } else {
      return "ID not found";
    }
  });

}
module.exports = findsById;