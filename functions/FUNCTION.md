# FUNCTIONS

Function is basically a block of code that performs specific task.
The purpose of function is to make the task that needs to be done more than once or twice easier.

For Example - 

If I want to print the name of user multiple times,the following will be the code:

for (let i=0;i<5:i++) {
    console.log("Your Name")
}

The above code works only once making lines of code even bigger.

To solve this problem we use function

function repeatname(name) {
   for (let i=0;i<5:i++) {
    console.log(name)
} 
}

repeatname("MyName")  ---> Now I can use this single line many times as I want instead of writing multiple lines.

So, how Function works.

1. We define a function - 

function func() {
    pass
}

2. We pass arguments if you want to pass any -

function func(name) {
    pass
}

3. The code inside the function executes the task 

function func(name) {
    console.log(name);  --> This will print name argument passed in the func function.
}

4. We call the function and pass the parameters if required -

func('Rajesh');

## HOISTING

In Javascript, concept called hoisting exists where we can call function before declaring it.

square(3)            ---->  Calling

function square(n) {  ----> Declaration
    console.log(n*n)
}

It will still work.

## REST / SPREAD OPERATORS

The REST and SPREAD Operators are two operators that use same syntax (...) but differ in terms of working.

#### REST OPERATOR

The REST Operator is used to pack the multiple values into single element in form of array.
The REST Operator can be used by adding ... ahead of parameter where you want to store multiple values.

function packer(...multiple) {
    console.log(multiple)
}

packer(123,456,789,234)  ---> This will store the values in the array and display it.

#### SPREAD OPERATOR

The Spread Operator is used to unpack multiple values in multiple arrays into single array.
We use this using [...arr1,...arr2]

function unpacker(arr1,arr2) {
    const arr3 = [...arr1,...arr2]
    console.log(arr3)
}

unpacker([1,2,3],[4,7,3])
>> [1,2,3,4,7,3]


