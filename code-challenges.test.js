// ASSESSMENT 2: Coding Practical Questions with Jest

const { describe } = require("yargs")

// const { it } = require("node:test")

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// PSEUDOCODE

// create a function called objectDivided that takes in an object
// parameters: one (object)
// if number inside of object is divisible by 3 return "'number' is divisible by 3"
// if number inside of object is not divisible by 3 return "'number' is not divisible by 3"
// anything else return "error"


// a) Create a test with expect statements for each of the variables provided.



// describe("objectDivided", () => {
//     it("takes in an object and checks if the number inside of it is divisible by 3", () => {
//     expect(objectDivided(object1)).toEqual("15 is divisible by 3")
//     expect(objectDivided(object2)).toEqual("0 is divisible by 3")
//     expect(objectDivided(object3)).toEqual("-7 is not divisible by 3")
//     const object1 = { number: 15 }
//     // Expected output: "15 is divisible by three"
//     const object2 = { number: 0 }
//     // Expected output: "0 is divisible by three"
//     const object3 = { number: -7 }
//     // Expected output: "-7 is not divisible by three"
//   })
// })

// Good failure!
// ReferenceError: objectDivided is not defined

// b) Create the function that makes the test pass.

// const objectDivided = (object) => {
//     if (object.number % 3 === 0) {
//         return object.number + " is divisible by 3"
//     } else if ( object.number % 3 !== 0) {
//         return object.number + " is not divisible by 3"
//     } else {
//         return "error"
//     }
// }

// console.log(objectDivided(object1))
// console.log(objectDivided(object2))
// console.log(objectDivided(object3))


// PASS  ./code-challenges.test.js
// ● Console

//   console.log
//     15 is divisible by 3

//     at Object.log (code-challenges.test.js:68:9)

//   console.log
//     0 is divisible by 3

//     at Object.log (code-challenges.test.js:69:9)

//   console.log
//     -7 is not divisible by 3

//     at Object.log (code-challenges.test.js:70:9)



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// PSEUDOCODE
// create a function called nounArray that takes in an array of strings
// parameters: one (array)
// iterate one index at a time and capitalize the first letter of each word in each index



// a) Create a test with expect statements for each of the variables provided.

// describe ("nounArray", () => {
//     it("takes in an array and capitalizes the first letter the words in each index", () => {
//         expect(nounArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(nounArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//         // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
//     })
// })

// Good Failure!
// ReferenceError: nounArray is not defined



// b) Create the function that makes the test pass.

// const nounArray = (array) => {
//     return array.map((value) => {
//         return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
//     })
// }

// console.log(nounArray(randomNouns1));
// console.log(nounArray(randomNouns2));

// PASS  ./code-challenges.test.js
// ● Console

//   console.log
//     [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]

//     at Object.log (code-challenges.test.js:129:9)

//   console.log
//     [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]

//     at Object.log (code-challenges.test.js:130:9)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// PSEUDOCODE
// create a function called vowelMachine that takes in a string and 
// parameters: one (string)
// returns the number of the index where first vowel appears

// a) Create a test with expect statements for each of the variables provided.


describe("vowelMachine", () => {
    it("takes in a string and logs the index of the first vowel", () => {
    expect(vowelMachine(vowelTester1)).toEqual(1)
    expect(vowelMachine(vowelTester2)).toEqual(0)
    expect(vowelMachine(vowelTester3)).toEqual(2)
    })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// Good Failure: ReferenceError: vowelMachine is not defined

// b) Create the function that makes the test pass.

const vowelMachine = (str) => {
    let strArr = str.split("")
    for(i = 0; i < strArr.length; i++){
        if(strArr[i] === "a" && strArr[i] === "e" && strArr[i] === "i" && strArr[i] === "o" || strArr[i] === "u"){
            return str.indexOf(strArr[i])
        }
    }
}




