const score = 400
console.log(score);

const balance = new Number(400.234)
console.log(balance);

console.log(balance.toFixed(2))
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let num = new Number(9007199254740991);

console.log(Math.log10(num) + 1)

// *************** Maths ****************

console.log(Math.abs(-4));

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Returns a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




