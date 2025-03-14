// Primitive - Number, String, Boolean, null, undefined, BigInt, Symbol 

// Reference - Arrays, Objects, Functions

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id, anotherId)

const players = ["Rohit","Rahul","Virat","Shreyas","Shubman"];

const player = {
    name: "Virat",
    role: "Batsman",
    age: 36,
};

// Taking an object as a parameter with destructuring
function getPlayer({name,role,age}){
    console.log(`There is a player named ${name} with role ${role} and age ${age}`)
}

getPlayer(player)

const getPlayerDirect = (name,role,age) => {
    console.log(`There is a player named ${name} with role ${role} and age ${age}`)
}

getPlayerDirect(player.name,player.role,player.age)

console.log(typeof getPlayer, typeof getPlayerDirect, typeof player, typeof players)


// Stack (Primitive) | Heap (Non-Primitive)

/*

All primitive data types are stored in stack, so whenever they are accessed, a copy is made
All non-primitive data types are stored in heap, so whenever they are accessed, they refer 
to the same location in heap

*/

let user = "Aatif"
let userNew = user
userNew = "Rohan"

console.log(user,userNew)


let admin = {
    name: "Admin1",
    access: "3"
}

let adminNew = admin
adminNew.access = 5

console.log(admin, adminNew)