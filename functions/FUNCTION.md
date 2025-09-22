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