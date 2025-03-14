// dates

let newDate = new Date();
console.log(newDate);

console.log(newDate.getDate(),newDate.getDay(),newDate.getFullYear())

console.log(newDate.getHours(),newDate.getMinutes())

let dateNow = Date.now();
console.log(Date.now()) // number of milliseconds from Jan 1, 1970

newDate = new Date();
let dateCustomized = newDate.toLocaleString('default',{
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})

console.log(dateCustomized)