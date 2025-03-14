let score = 33

console.log(typeof score)
console.log(score)

score = "33"

console.log(typeof score)
console.log(score)

score = "33abc"

let scoreNumber = Number(score)
console.log(typeof scoreNumber)
console.log(scoreNumber)

/*

For conversion, we can use Number, String and Boolean

*/

// ************** Operations **************

let value = 3;
let negValue = -value
console.log(negValue);

let str1 = "Hello"
let str2 = " Aatif"
let str3 = str1 + str2;
console.log(str3);

let empty = "";
console.log("Empty in Number :", Number(empty), " Hello")

let str = "32"
let newNum = +str
console.log(typeof newNum)
console.log(newNum);

let gameCounter = 100
gameCounter++;
console.log(gameCounter)

console.log(1 + 2 + "3" + 4 + 5)
