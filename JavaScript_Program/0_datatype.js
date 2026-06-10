/* 1. Premitive Data type : Simple ; Number, string, boolean , BigInt, Null, undefine 
 2. Non premitivie : Reference ;  - array, Objects, interface, class

 //1. Primitive Types:
//---------------------
//   a. NUMBER    : Represents both integer and floating-point numbers.(8 bytes)
//   b. STRING    : Represents sequences of characters. (2 bytes per character)
//   c. BOOLEAN   : Represents logical entities and can have two values: true or false. (1 byte)
//   d. UNDEFINED : A variable that has been declared but not assigned a value has the value undefined.
//   e. NULL      : Represents the intentional absence of any object value.

//2. Non-Primitive Types:
//---------------------
//   a. OBJECT    : Used to store collections of data and more complex entities.
//   b. ARRAY     : A special type of object used to store ordered collections of values.
//   c. FUNCTION  : A block of code designed to perform a particular task.
//   c. CLASS     : A blueprint for creating objects with predefined properties and methods.
//   d. INTERFACE : A structure that defines the contract in your application. It defines the syntax for classes to follow but does not provide implementation.


Number : Size - 8 byets for all number in a variable 
String : Size 2 byets for each character 
Boolean : Size 1 bytes = 8 bits */

let longData = 1233455555666n;  // BigInt end with n;
console.log( typeof longData); // BigInt

//otherway 
let sam = BigInt (100);
console.log(sam); // 100n;
console.log(typeof sam); // BigInt

//Safe min and Max values of Number
let min = Number.MIN_SAFE_INTEGER;  // min vale 2power of 53
let max = Number.MAX_SAFE_INTEGER // max value if go beyond then use BigInt

//Null : Size 0 to 8 bytes - depends on JS engine 

let x = null;
console.log( typeof x); // Object -- but this is KNOWN JS issue it should be Null 