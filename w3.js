// Write a Python program to convert Python objects into JSON strings. Print all the values
// var obj={
//     "name":"ankita",
//     "age":22,
//     "height":5.11
    
// }
// console.log(JSON.stringify(obj));


var mobile=function(model_no){
    this.model=model_no;
    this.price=30000;

};
var sam=new mobile("galaxy");
var nokia=new mobile("3310");
// sam.color="pink"
// console.log(sam)
// nokia.color="pink"
// console.log(nokia)
mobile.prototype.color="pink"
console.log(sam)