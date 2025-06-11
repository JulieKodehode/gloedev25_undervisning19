// For Loop med Variables
for (let index = 0; index <= 10; index++) {
    console.log("Teller opp: " + index)
}

for (let i = 10; i >= 0; i--) {
    console.log("Teller ned: " + i)
}

let count = 10;
for (let i = 1; i <= count; i++) {
    console.log(`${count} x ${i} = ${count * i}`)
}

count = 7;
for (let i = 1; i <= count; i++) {
    console.log(`${count} x ${i} = ${count * i}`)
}

//
//

// For Loop med en Array
const fruitBowl = ["Banana", "Orange", "Pear", "Orange", "Peach"];

for (let i = 0; i < fruitBowl.length; i++) {
    console.log("For loop: " + fruitBowl[i])
}

// forEach med en Array
fruitBowl.forEach((fruit) => {
    console.log("forEach: " + fruit)
    console.log(fruitBowl);
})

// map med en Array
const fruitBowlMap = fruitBowl.map((fruit) => {
    return "One " + fruit
})
console.log(fruitBowlMap);