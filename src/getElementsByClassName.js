// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function(className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
// You should use document.body, element.childNodes, and element.classList
let body = document.body;
let results = [];

function findClass(node){
if(_.contains(node.classList, className)){
  results.push(node);
}
  if(node.childNodes){
    _.each(node.childNodes, function (babyNode){
      findClass(babyNode);
    })
  }
}
findClass(body);
return results;
};
