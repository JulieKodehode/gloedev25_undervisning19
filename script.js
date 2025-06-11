// For Loop med Variables

// Teller fra 0 til 10 og skriver ut verdiene
for (let index = 0; index <= 10; index++) {
    console.log("Teller opp: " + index)
}

// Teller ned fra 10 til 0 og skriver ut verdiene
for (let i = 10; i >= 0; i--) {
    console.log("Teller ned: " + i)
}

// Skriver ut gangetabellen for tallet 10 (fra 1x10 til 10x10)
let count = 10;
for (let i = 1; i <= count; i++) {
    console.log(`${count} x ${i} = ${count * i}`)
}

// Skriver ut gangetabellen for tallet 7 (fra 1x7 til 7x7)
count = 7;
for (let i = 1; i <= count; i++) {
    console.log(`${count} x ${i} = ${count * i}`)
}


// For Loop med en Array

// Lager en liste med frukt
const fruitBowl = ["Banana", "Orange", "Pear", "Orange", "Peach"];

// Går gjennom listen med en klassisk for-løkke og skriver ut hver frukt
for (let i = 0; i < fruitBowl.length; i++) {
    console.log("For loop: " + fruitBowl[i])
}


// forEach med en Array

// Går gjennom listen med forEach-metoden og skriver ut hver frukt
fruitBowl.forEach((fruit) => {
    console.log("forEach: " + fruit)
})


// map med en Array

// Bruker map til å lage en ny array der hver frukt får "One" foran seg, og skriver det samtidig ut
const fruitBowlMap = fruitBowl.map((fruit) => {
    console.log("map: " + "One " + fruit)
    return "One " + fruit
})
