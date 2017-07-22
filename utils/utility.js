/*jshint esversion: 6*/
function findsIndex(id, collection) {
  let findId = collection.findIndex((item,index) => {
    return item.id === Number(id);
  });
  return findId;

}
module.exports = findsIndex;