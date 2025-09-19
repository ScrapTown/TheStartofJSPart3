# NUMBER 

Number is Datatype which consists all the numeric values including float,double,negative values,etc.

let a = 12345.6789
let b = 2345.6789
let c = 'Apple'

The following are the methods used to operate on number values:

1. toFixed --> rounds of value till specified number after decimal point.

console.log(an.toFixed(2))
>> 12345.68

2. toPrecision -->rounds of complete value

console.log(an.toPrecision(2))
>> 1.23e+4

3. toString --> converts the value to string datatype.

console.log(an.toString())
>> 2345.6789

4. Number --> converts the other datatype value to Number

console.log(Number(bm))
>> 12345.6789

- Note: If datatype cannot be converted to Number then it will return NaN

console.log(Number(co))
>> NaN
Since, co contains String "Apple" that cannot be converted to Number.
