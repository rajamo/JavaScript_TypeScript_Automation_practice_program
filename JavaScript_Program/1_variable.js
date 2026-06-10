


/*JavaScript have only 2 Variables Let and const.  Var (depricated)
Let is used to when variable value changes and not allowed RE Declarion  // Hoisting is Allowed with RT Error 
Const is used when variable value is constant but object/array properties can be changed even if the object/array is declared as const
Const - Allway Declare as CAPITAL - like URL, Days, PI etc., 
 Var is depricated, avoid the var and its ALLOWD to Re declared many time. // Hoisting allowed without RT Error */

console.log('********** LET  **********************');
for (let i=0; i<5; i++){
 console.log(i);
};    

console.log('********** CONST **********************');

const LOCATOR = "xpath=//input[@name='username']";
// Locator = "id=username"; --> This will throw an error as Locator is a const
console.log(LOCATOR);

const PERSON ={
    firstname:"raja",
    age: 40
};
console.log(PERSON.age);
PERSON.age=41; // This is allowed
console.log(PERSON.age);
console.log(PERSON);


