
//JavaScript Data Types and Typeof Operator
//JavaScript has dynamic types. We do not need to declare variable type explicitly. The type is determined automatically during program execution based on the value assigned to the variable.
//JavaScript has the following data types:

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

console.log('********** TYPEOF **********************');
let x = 20;
console.log("1." + typeof x + "\n"); // outputs: number

let y = "Hello, World!";
console.log("2." + typeof y + "\n"); // outputs: string

let z = {name: "Alice", age: 30};
console.log("3." + typeof z + "\n"); // outputs: object

let xyz = [1, 2, 3, 4, 5];
console.log("4." + typeof xyz + "\n"); // outputs: object

let flag = true;
console.log("5." + typeof flag + "\n"); // outputs: boolean

let type = typeof flag;
console.log("6." + "type of type ",type + "\n"); // outputs: bool.

let k = null;
console.log("7." + typeof k + "\n"); // outputs:  returns object due to legacy reasons 

let s;
console.log("8." + typeof s + "\n"); // outputs: undefined  

function sample(){
    console.log("Inside sample function");
}

console.log("9." + typeof sample + "\n" ); // outputs: function


console.log('********** INSTANCEOF **********************');
console.log('10.' + (xyz instanceof Array) + "\n"); //true
console.log('11.' + (z instanceof Object) + "\n");   //true
console.log('12.' + (y instanceof String) + "\n"); //    false
console.log('13.' + (flag instanceof Boolean) + "\n"); // false
console.log('14.' + (k instanceof Object) + "\n");   //false 

console.log("15." + (k instanceof Object) + "\n");   //false as null is not an instance of Object, it is a primitive value that represents the absence of any object value. It is a special case in JavaScript and is not considered an instance of any type, including Object.
console.log("16." + (s instanceof Object) + "\n");   // actuall is undefined  
console.log("17." + (x instanceof Number) + "\n");   //false because x is a primitive number, not an instance of the Number object. In JavaScript, primitive values like numbers, strings, and booleans are not instances of their respective wrapper objects (Number, String, Boolean). They are treated as simple data types rather than objects.
console.log("18." + (type instanceof String) + "\n");   //false because type is a primitive string, not an instance of the String object. In JavaScript, primitive values like strings are not instances of their respective wrapper objects (String). They are treated as simple data types rather than objects.  
console.log("19." + (z instanceof Array) + "\n");     //false because z is an object, not an instance of the Array object. In JavaScript, arrays are a specific type of object, but not all objects are arrays. The instanceof operator checks if an object is an instance of a specific constructor or class, and since z is a plain object and not an array, it returns false.
console.log("20." + (sample instanceof Function) + "\n"); //true because sample is a function, and in JavaScript, functions are objects that are instances of the Function constructor. The instanceof operator checks if an object is an instance of a specific constructor or class, and since sample is a function, it returns true.
