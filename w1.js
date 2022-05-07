// Write a Python program to convert JSON data to javascript object.

var obj='{"id":11,"name":"ankita","age":22}'
var json_object=JSON.parse(obj)
console.log(json_object.id)
console.log(json_object.name)
console.log(json_object.age)