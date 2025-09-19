// Primitive Data Types

let a = 123
let b = "Apple"
let c = true
let d = null
let e;
let f = Symbol("id");
let g = 123n 

//  We use 'typeof' to check the data type of variables

console.log(`a is ${typeof a} datatype`,a)
console.log(`b is ${typeof b} datatype`,b)
console.log(`c is ${typeof c} datatype`,c)
console.log(`d is ${typeof d} datatype`,d)
console.log(`e is ${typeof e} datatype`,e)
console.log(`f is ${typeof f} datatype`,f)
console.log(`g is ${typeof g} datatype`,g)

// Non-Primitive Data Types

let arr = [1,2,3,4]
let obj = {name:"Raj",age:34}
let func = function mno(){console.log("Hello World")}

console.log(`arr is ${typeof arr} datatype`,arr)
console.log(`obj is ${typeof obj} datatype`,obj)
console.log(`func is ${typeof func} datatype`,func)

const h = {name:"mna",age:23}
h.name = "Raj"
console.log(h)