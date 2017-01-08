'use strict';

// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

// and we want to make a copy of it.
const team = players

// You might think we can just do something like this:
// team[3] = 'Lux'

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice()

// or create a new array and concat the old one in
const team3 = [].concat(players)

// or use the new ES6 Spread
const team4 = [...players]

//or this
const team5 = Array.from(players)

// now when we update it, the original one isn't changed
team2[3] = 'Lux'
console.log(`players is ${players}`)
console.log(`team2 is ${team2}`)
console.log(`team3 is ${team3}`)
team4[3] = 'Yanni'
console.log(`team4 is ${team4}`)
console.log(`players is still ${players}`)
team5[3] = 'Lum'
console.log(`team5 is ${team5}`)
console.log(`players is still ${players}`)

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Ashly L',
  age: 37
}

// and think we make a copy:
// const captain = person
// captain.number = 99
// console.log(`person is ${person.name}, ${person.age}, ${person.number}`)
// console.log(`captain is ${captain.name}, ${captain.age}, ${captain.number}`)

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 })
console.log(`cap2 is ${cap2.age}`)
console.log(`person is still ${person.age}`)

// We will hopefully soon see the object ...spread
// const cap3 = {...person}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
}

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));
