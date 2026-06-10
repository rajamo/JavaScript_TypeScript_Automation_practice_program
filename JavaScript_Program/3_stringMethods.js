//String operations
console.log('********** 1.STRING *****************');
let str = "Hello, World!";
console.log("1."+ str.length + "\n"); // Length of the string
console.log("2."+ str.toUpperCase() + "\n"); // Convert to uppercase
console.log("3."+ str.toLowerCase() + "\n"); // Convert to lowercase  

console.log('************ 2.INDEX OF ********************');

let den = 'JavaScript';
console.log("4."+ den [2] + "\n"); // Access character at index 2 // -v 
console.log("5."+ den.charAt(4) + "\n"); // Access character at index 4 // -S
console.log("6."+ den.indexOf('S') + "\n"); // Find index of character 'S'// -v is 2 and -S is 4
console.log("7."+ den.indexOf('P') + "\n"); // Find index of character 'P' (not found, returns -1) // -P is not present in the string so it returns -1
console.log("8."+ den.lastIndexOf('a') + "\n"); // Find last index of character 'a' // -a is present at index 1 and 3 but last index is 3 so it returns 3


console.log('********** 3.CONCAT **********************');
console.log("9."+ den.concat(' is fun!') + "\n"); // Concatenate strings // den is not changed as string is immutable in JavaScript, it returns a new string with the concatenation result.

console.log('********** 4.REPLACE / REPLACE ALL **********************');
console.log("10."+ den.replace('Java', 'Type') + "\n"); // Replace 'Java' with 'TypeScript' for first occurrence
console.log("11."+ "21-06-23".replaceAll('-', '/') + "\n"); // Replace '-' with '/' for all occurrence


console.log('************* 4.SLICE *******************');
console.log("12."+ den.slice(0,4) + "\n"); // Extract substring from index 0 to 3 // Java
console.log("13."+ den.slice(2,-4) + "\n"); // Extract substring from index 2 to -5 (-ve reverse) //vaSc
console.log("14."+ den.slice(-5,8) + "\n"); // Extract substring from index -5 (convert to index 5) to 7// cri
//let den = 'JavaScript';
//           0123456789
//           0987654321

console.log('********** 5.SUBSTRINGS **********************');
// Slice more powerful than substring used in string + array and also support -ve index
// Substring does not support -ve index but can swap indexes if first is greater than second
console.log("15."+ den.substring(4,10) + "\n"); // Extract substring from index 4 to 9 // Script
console.log("16."+ den.substring(10,4) + "\n"); // Extract substring from index 4 to 9 // Script as substring will swap the indexes if first is greater than second but slice will not swap the indexes and return empty string

console.log('************ 6.SPLIT ********************');
console.log("17."+ den.split('') + "\n"); // Split string into array of characters
console.log("18."+ den.split('a') + "\n"); // Split string at each 'a'into array // J vScript as it splits the string at each 'a' and returns an array of substrings

console.log('************ 7.SEARCH ********************');
console.log("19."+ den.includes('Script') + "\n"); // Check if string includes 'Script' // true 
console.log("20."+ den.startsWith('Java') + "\n"); // Check if string starts with 'Java' // true
console.log("21."+ den.endsWith('Script') + "\n"); // Check if string ends with 'Script' // true 
console.log("22."+ den.search('a') + "\n"); // Search for 'a' in the string // true 

console.log('********** 8.TRIM **********************');
console.log("23."+ den.trimStart() + "\n"); // Remove whitespace from start
console.log("24."+ den.trimEnd() + "\n"); // Remove whitespace from ends
console.log("25."+ den.trim() + "\n"); // Remove whitespace from both ends

console.log('********** 9.REPEAT **********************');
console.log("26."+ den.repeat(2) + "\n"); // Repeat the string twice      
console.log('*********** 10.PAD *********************');
console.log("27."+ den.padStart(15,'%') + "\n"); // Pad the string at the start to a total length of 15 with '%'
console.log("28."+ den.padEnd(15,'-') + "\n"); // Pad the string at the end to a total length of 15 with '-'  




