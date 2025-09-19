# DATATYPES

There are two types of datatypes in JavaScript:

1. Primitive Datatype
2. Non-Primitive Datatype

Before we proceed to datatype,we need to learn two common concepts in programming:

1. Call by Value -  Here,the copy of value stored in one variable in passed to other due to which changes in another variable won't affect original value stored in previous variable.

Here, the concept of Stack and Heap Memory comes.

Primitive Datatypes are stored in Stack Memory whereas Non-Primitive Datatypes are stored in Heap Memory.

     ________
    |________|
    |________|
    |________|
    |___3____|
    |___a____|    Here, 3 is stored in a

     ________
    |________|
    |________|
    |___b____|
    |___3____|
    |___a____|    Here, copy of value 3 is passed to b

2. Call by Reference - Here,changes in one variable will affect original value in another variable.

     ________                            ________
    |________|                         |         |
    |________|                         |         |
    |________|                         |         |
    |________|              |------>   | [1,2,3] | 
    |___a____|  ------------|          |_________| 

     ________                            ________
    |________|                         |         |
    |________|                         |         |
    |________|                         |         |
    |___b____|  ------------------->   | [1,2,3] | 
    |___a____|  ------------|          |_________| 

Value of non-primitive variables are stored in heap memory.
As a and b both points to value stored in same location.

## Primitive Datatype

There are seven main types of primitive datatypes:

1. Number -> All the numeric values including float,negative,etc.
let a = 123
2. BigInt -> Numeric values greater than 2**53
let g = 123n 
3. String -> All the characters,group of characters(word or sentence).
let b = "Apple"
4. null -> Indicates empty values that cannot be represented by 0 [Null is considered as object type]
let d = null
5. undefined -> variables that are not defined 
let e;
6. Symbol -> All the special characters acting as an unique values.
let f = Symbol("id");
7. Boolean -> True or False
let c = true

## Non-Primitive Datatypes

1. Array - is collection of values that can be accessed by index.
let arr = [1,2,3,4]
2. Object - is datatype that contain key-value pairs.
let obj = {name:"Raj",age:34}
3. Function -  is datatype that performs specific task.
let func = function mno(){console.log("Hello World")}

#### NOTE

In previous part,we learnt about variables:
So,we can change the values in const variable but not directly like we do with let and var.

const a = {name:"Raman",age:23}
a.name = "Raj"

The above code will change the name key in a object even if its constant.

