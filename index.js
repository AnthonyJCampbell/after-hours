//
// Closures
//

// Basic example of nested scopes
const powerLevel = "over 9000"
const theChosenOne = "Anakin Skywalker"
const crossover = () => {
  return `${theChosenOne}'s power level is ${powerLevel}`
}
// console.log(crossover())

// Realistic example
const counter = () => {
  let count = 0
  
  return function() {
    count++

    // What are we actually returning?
    return count
  }
  // What would happen if we just do the mutation, not returning a full function?
}

const newCounter = counter()

// What will this return?
// console.log(newCounter)

// What will this do now that we invoke it?
// console.log(newCounter())











//
// Arrow methods
//

// >>> Understanding explicit and implicit return and function scope
const returnAndCurlies = () => {
  return console.log("I'm the first, with a full return statement and curlies!")
}

// Does this work?
// returnAndCurlies()

// So when does IMPLICIT RETURN kick in? 
const noReturnOrCurlies = () => console.log("I'm the second, with no return or curlies!")

// Does this work?
// noReturnOrCurlies()















//
// >>> passing parameters
//
// Why use parentheses?

let sampleSentence = "Hello"

const withParens = sampleSentence => {
  console.log(`${sampleSentence} WEBEU2!`)
}

// Which one do I use?
// withParens()
// withParens(sampleSentence)




















//
// >>> Array methods
//
const pets = [
  {
    'name': 'Tinkerbell',
    'species': 'cat',
    'age': 2
  },
  {
    'name': 'Lucy',
    'species': 'dog',
    'age': 12
  },
  {
    'name': 'Chloe',
    'species': 'cat',
    'age': 18
  },
  {
    'name': 'Mojo',
    'species': 'dog',
    'age': 6
  },
  {
    'name': 'Olivia',
    'species': 'parakeet',
    'age': 4
  },
  {
    'name': 'Shadow',
    'species': 'cat',
    'age': 8
  },
  {
    'name': 'Oreo',
    'species': 'cat',
    'age': 5
  },
  {
    'name': 'Molly',
    'species': 'dog',
    'age': 4
  },
  {
    'name': 'Freddie Prinze Jr.',
    'species': 'parakeet',
    'age': 9
  }
];

// Remember this one?
// The old way of doing things:
const oldSumPetYears = (arr, kind, multiplier) => {
  const filtered = pets.filter(pet => {
    return pet.species === kind;
  })
  console.log(filtered);

  const mapped = filtered.map(pet => {
    return pet.age * multiplier;
  });
  console.log(mapped);

  const reduced = mapped.reduce((acc, currentValue) => {
    return acc + currentValue
  }, 0)
  console.log(reduced);
  
  return `The combined ${kind}s' ages: ${reduced}`;
}

// The new way
// const newSumPetYears = (arr, kind, multiplier) => {
//   return pets.filter(pet => pet.species === kind).map(pet => pet.age).reduce((acc, currentValue) => {
//       currentValue *= multiplier
//       return acc + currentValue
//     }, 0)
// }

// console.log(oldSumPetYears(pets, "cat", 1))
// console.log( `The combined cats' ages: ${newSumPetYears(pets, "cat", 1)}`)