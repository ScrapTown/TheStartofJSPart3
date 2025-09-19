const a = 3

console.log(a)

// a = 5

// console.log(a)

// TypeError: Assignment to constant variable.

let b = 4

console.log("Initial value of b:",b)

b = 3

console.log("Current value of b:",b)

// You can reassign a variable declared with let
// but you cannot redeclare it in the same scope

var c = 5

console.log(c)

// var is similar to let except its function scoped

if (true) {
    let f = 4
    console.log(f)
}

console.log(f)

function func() {
    var g = 4
    console.log(g)
}

console.log(g)

func()