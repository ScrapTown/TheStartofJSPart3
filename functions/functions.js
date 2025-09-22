function sayMyName(name) {
    console.log(`My name is ${name}`);
}

sayMyName("Rajesh")

function sayMyName2(name) {
    if (name === undefined) {
        console.log("Please enter your name.")
    } else {
        console.log(`My name is ${name}`);
           
    }
}

sayMyName2("Raman")

function additions(n1,n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        let result =n1 + n2;
        console.log(result);
        
    } else {
        console.log("Please enter only numbers.")
    }
}

additions(2,2) 

returner("Om")

function returner(n) {
    console.log(`Hello ${n}`);
}

// a = returner("Om")
// console.log(a)

// Function Expression

const square = function power(n) {
    return n * n
}

console.log(square(23));


greet(3)

function greet(n) {
    console.log(n*n)
}

mister("Remen")

function mister(n) {
    let name = n;
    console.log(`hello ${name}`);
}

function multiplevalues(...values) {
    console.log(values);
}

multiplevalues(1,2,3,4,5,6,7)

function objectvalues(obj) {
    console.log(`The name is ${obj.name} and age is ${obj.age}`)
}

const objectz = {
    name:"Nayan",
    age:24
}

objectvalues(objectz)

function multiArray(arr1,arr2) {
    const arrcombined = [...arr1,...arr2]
    console.log(arrcombined);
}

multiArray([2,3,4],[5,6,7])

function secondelmnt(arr) {
    console.log(arr[1]);
}

secondelmnt([2,4,1,7,3,7])