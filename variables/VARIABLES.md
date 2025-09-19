# VARIABLES

Before learning Variables, we need to understand Scope:

### Scope 

Scope is basically block(area) till where variable is declared and can be called.

There are two types of Scope -

1. Block-Scoped - Variables that are valid inside block like if,else,while,for are called Block-Scoped.
- [const] and [let] are block-scoped.

- Ex - if (condition) {
    let a = "Apple"
    console.log(a)      >> This will print the value of the variable.
}

console.log(a)   >> This will raise error an ReferenceError: a is not defined


2. Function-Scoped - Variables that are valid only inside declared function is Function Scoped.
- [var] is function-scoped

if(condition) {
    var a = 5
    console.log(a)   >> This will print the value
}

console.log(a)  >> This will also print the value as its not block scoped

function func() {
    var f = 5
    console.log(f)  >> This will print the value
}

console.log(f)  >> This will raise an ReferenceError: f is not defined

There are three ways to declare variables in JavaScript:

- const: Used to declare constant value and does not support binding (direct reassignment).
- let: Used to declare variables and can be reassigned.
- var: It is similar to let except its function-scoped and not that used anymore.
