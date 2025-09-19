# STRINGS

String is datatype that contains characters,group of characters,group of words and sentences.

A String is declared through three ways:

1. Single Quotes

let a = 'Apple'
console.log('This is an value',a)

2. Double Quotes

let a = "Apple"
console.log("This is an value",a)

3. Backticks (Template Literals)

let a = "Apple"
console.log(`This is an value of a: ${a}`)

The Template Literals is Used for String Interpolation ( Using Variables within string).

There are various methods to perform operations on string.
The following are some methods:

let a = "Apple"

1. toUpperCase / to LowerCase  --> changes the case of string to UpperCase and LowerCase

console.log(a.toLowerCase())
>> APPLE
console.log(a.toUpperCase())
>> apple

2. length --> returns length of the string

console.log(a.length)
>> 5

3. substring --> returns the substring of string starting from first index to last index.

console.log(a.substring(1,3))
>> App

4. slice --> acts same as substring.

console.log(a.slice(3,-1))
>> l

The difference between substring and slice is substring treats negative value as 0

5. replace --> replaces the first occurence of specified character or string with another character or string

console.log(a.replace("e","y"))
>> Apply

6. split --> splits the string by using specified parameter.

console.log(a.split(''))
>> ["A","p","p","l","e"]

7. charAt --> returns the character present at the specified position

console.log(a.charAt(4))
>> e

8. indexOf --> returns the index of specified character (only first occurrence).

console.log(a.indexOf('p'))
>> 1

9. includes --> returns true or false if substring is present or not.
console.log(a.includes("app"))
>> true

10. trim --> removes specified characters from the front and back of the string

let b = "  Banana  "
console.log(b.trim())
>> Banana