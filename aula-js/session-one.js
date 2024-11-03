/*

JavaScript strings are for storing and manipulating text.

A JavaScript string is zero or more characters written inside quotes.

check https://www.w3schools.com/js/js_strings.asp
*/

// Backslash escape
// when using a string we can use a backslash -> \ 
// it turns a special character into a string character

const backslashExample = "ola \""

// this way we can add a W into our string

// we can use it create a new line as well

const backslashLine = "Rui \n Miguel \n Rigueira"

// if we use back ticks -> `` to create our string
// we can interpolate javascript in the middle of our string and have a multi line string
const firstName = "Rui"
const lastName = "Rigueira"

const sayHello = `Ola, ${firstName} ${lastName}`

// ---
// Common methods: 
// ---

// length

// determines the number of characters of the string

const lengthExample = "ola teste"

// console.log(lengthExample.length)

// slice

// it cuts and return part of our string
// it accepts 2 parameters
// the start position and end position

const sliceExample = "ola Rui"

// console.log(sliceExample.slice(4))
// console.log(sliceExample.slice(0, 3))


// replace

// it replace a certain (portion of the)string with another

const replaceExample = "ola Miguel ola"

//console.log(replaceExample.replace("ola", "adeus"))


// replaceAll
// it replace a certain (portion og the)string with another in the full extend of the string

const replaceAllExample = "ola Miguel ola"

// console.log(replaceAllExample.replaceAll("ola", "adeus"))


// toUpperCase
// convert our string to uppercase

// toLowerCase
// convert our string to lowercase

const caseExample = "Carrega Porto"

// console.log(caseExample.toUpperCase())
// console.log(caseExample.toLowerCase())


// concat
// adds any number of string to a string

const concatExample = "Porto"

// console.log(concatExample.concat(" é do melhor"))
// console.log(concatExample + " é do melhor")


// trim
// trimStart
// trimEnd
// cleans out string of whitespaces, trim - removes all; trimStart - only at the beginning of our string; trimEnd - only at the end of our string;

const trimExample = "    o   Teste      !!     j   "

// console.log(trimExample.trim())
// console.log(trimExample.trimStart())
// console.log(trimExample.trimEnd())

// padStart
// padEnd
// allows to add any string at the start or end of another string until a length is fulfilled

const padExample = "Hum"

// console.log(padExample.padStart(20, "ola"))
// console.log(padExample.padEnd(20, "x"))


// split
// allows to split a string x times by a string

const splitExample = "Oi 12 tudo 12 bem"

// console.log(splitExample.split("12"))

//
//
//

const locatorsExample = "Ola o meu nome é Rui Miguel, eu gosto da web e a web gosta de mim."

// indexOf()
// find the index of a string inside our string
// it stop of first match

// console.log(locatorsExample.indexOf("web"))

// lastIndexOf()
// find the index of a string inside our string, starting at the end
// it stop of first match

// console.log(locatorsExample.lastIndexOf("web"))


// search()
// find the index of a string inside our string -> used for regular expression -> REGEX
// it stop of first match

// console.log(locatorsExample.search("web"))

// includes()
// verify if a string exists inside our string

// console.log(locatorsExample.includes("web"))


// startsWith()
// endsWith()
// verify if a string starts or ends with a certain string

// console.log(locatorsExample.startsWith("O"))
// console.log(locatorsExample.endsWith("nop"))

/*
NUMBERS

toString()	Converts a number to a string
isInteger()	Checks whether a value is an integer
parseFloat()	Parses a string an returns a number
parseInt()	Parses a string an returns a whole number
*/

// toString
// convert a number to string

const number = 10
// console.log(number.toString())
// console.log(number)

// toExponential()
// convert a number to a exponential 
// console.log(1000.0.toExponential())

// toFixed 
// convert a number to a number with x decimal number
// console.log(Number(5.5).toFixed(12))

// toPrecision
// convert a number to a number x length
// specified length

// console.log(Number(5.5).toPrecision(12))

// isNan
// validate if value is a number
// console.log(isNaN(10))

// convert to a number with decimal
/*console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));*/


//  convert to a number rounded
/*console.log(parseInt("10"));
  console.log(parseInt("11.99999"));
  console.log(parseInt("10 20 30"));*/

/*
Loops are handy, if you want to run the same code over and over again, each time with a different value.

for - loops through a block of code a number of times
for/in - loops through the properties of an object
while - loops through a block of code while a specified condition is true
*/

const max = 19

for (let i = 0; i < 10; i++) {
  // console.log("ola", i)
}


/*

The JavaScript for in statement loops through the properties of an Object:
*/


const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";

for (let key in person) {

  text = text + person[key]
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";

for (let x in numbers) {


  if (numbers[x] === 9) {
    break
  }

  // console.log(numbers[x])
}

/*

The while loop loops through a block of code as long as a specified condition is true.
*/

let i = 0

while (i < 10) {
  text += "The number is " + i;
  i++;
}




const array = ["ola", "adeus", "pois"]
const numberarray = [1, 2, 3, 4, 5]
const array2 = ["Porto", 5]

// length
// its the number of items in the array
// array.length

// console.log(array.length)

// at
// returns the item at an index
// its usefull for backward access
// console.log(array.at(-1))

// reverse
// invert the order of items
// console.log(array.reverse())

// concat
// joins any number of array and returns a new array
// const x = array.concat(array1, array2)
// console.log(array)

// push
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// array.push('yo')
// console.log(array);

// unshift
// The unshift() method adds one or more elements to the start of an array and returns the new length of the array.
// array.unshift('yo');
// console.log(count2);
// console.log(array);

// pop
// removes the last item of an array and returns said item
// array.pop()

// shift
// removes the first item of an array and returns said item
// console.log(array.shift())
// console.log(array)

// every
// validates if every item of the array pass a certain condition
const x = numberarray.every(function (el) {
  return el > 50
})

console.log(x) 

// some 
// validates if any item of the array pass a certain condition
 const someVar = numberarray.some(function (el) {
  return el === 2
})

console.log(someVar)


// includes
// validates if a certain item exits in the array
// console.log(array.includes("ola"))

// filter
// return a array of the items that pass a certain condition
const filterExample = numberarray.filter(function (el) {
  return el > 3
});

// console.log(filterExample)
