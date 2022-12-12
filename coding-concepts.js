// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer: [H, o, t, e, l,  , 2, 0, 2, 2]
// b) Verify and explain: .split takes the string Hotel 2022 and turns it into an array
// [
//   'H', 'o', 't', 'e',
//   'l', ' ', '2', '0',
//   '2', '2'
// ]

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This is a function, but it doesn't have a "return" i think this is going to be an error?
// b) Verify and explain: undefined. but for the same reason as above, there is no return. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain: ayy so the .map method is taking in the array and for every index in the array it will make an iteration that multiplies the value of the index by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: ayyy so .filter is going to create a new array with only the elements that fit the equation on the other side of the =>. The % is a modulo which just means not. this equation is saying 'the remainder of a number divided by 2 does NOT equal 0' or just another way of saying odd.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Correct! If you follow the pathway, the 0th (or first) index of the 'languages' (key) array is JavaScript. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Hmm this is either going to create a new object using the instructions in the class called Learn, but i think something might be missing so it might not work? I'm not sure
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2022 }, ah so it did work. It created a new object using the template provided.
