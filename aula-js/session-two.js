/*
----
Arrays
----
*/

// find
// return the first item that pass a certain condition
/*
function finderFn(el) {
  return el.length === 5
}

const finder = array.find(finderFn)
// console.log(finder)

// findLast
// return the last item that pass a certain condition

const finderLast = array.findLast(function (el) {
  return el.length === 4
})*/
// console.log(finderLast)

// fill
// Fill with 0 from position 2 until position 4
// from is inclusive
// to is not inclusive
// const filler = array.fill(0, 2, 4)
// console.log(filler)

// Fill with 5 from position 1
// const filler2 = array.fill(0, 2)
// console.log(filler2)

// join
// The join() method creates and returns a new string by concatenating all of the elements in an array
// const join = array.join("-yo-")
// console.log(join)

// toString
// The toString() method returns a string representing the specified array and its elements.
// const toStringEx = array.toString("-yo-")
// console.log(toStringEx)

// forEach
// The forEach() method executes a provided function once for each array element.
/* 
array.forEach(function (el) {

  if(el.length > 3) {
    // Y.push(el)
  }
})*/
// console.log(Y)


// map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
/* const mapExample = array.map(function (el) {
  return el + "hey"
})*/
// console.log(mapExample)


// sort
/* function compareFn(a, b) {
    if (a is less than b by some ordering criterion) {
        return -1;
    }
    if (a is greater than b by the ordering criterion) {
        return 1;
    }
    // a must be equal to b
    return 0;
} */


const array = ["ola", "opah", "adeus", "pois", "ola", "ola", "ola", "x"]
const numberarray = [1, 4, 7, 9, 5]

const array2 = ["Porto", 5]

/*
const sortExample = array.sort()
console.log(sortExample)
const sortExample2 = numberarray.sort()
console.log(sortExample2)*/
const sortExample3 = array.sort(function (el1, el2) {
  if (el1.length > el2.length) {
    return 1
  } else if (el1.length < el2.length) {
    return -1
  } else if (el1.length === el2.length) {
    return 0
  }
})
// console.log(sortExample3)

// reduce
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, 
// passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.
const array4 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue2 = 9;
const sumWithInitial2 = array4.reduce(
  function (accumulator, currentValue, index) {
    // console.log(index, currentValue, accumulator)
    return accumulator + currentValue
  }
);

// console.log("res", sumWithInitial2);


// reduceRight
const array5 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue3 = 0;
const sumWithInitial3 = array5.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue3
);

// console.log(sumWithInitial);


// slice
// array.slice(start, end)

const sliceExample = array.slice(0, 2)
// console.log(sliceExample, array)

const arrayNovo = ["ola", "opah", "adeus", "pois", "ola", "ola", "ola", "x"]
// splice
// array.splice(start, deleteCount, item1, item2, item3)
// const spliceExample = arrayNovo.splice(0, 3, "nao")

// console.log(spliceExample, arrayNovo)

// findIndex
// findLastIndex
// console.log(arrayNovo.findIndex(function (el) { return el === 5 }))
// indexof
// lastIndexOf
// console.log(array.indexOf("ola"))
/*
----
Objects
------
*/

// 
const key = "firstName"
const objectExample = { firstName: "Rui", lastName: "Rigueira", team: "FCPorto" }

objectExample[key]
objectExample.firstName

for (const key in objectExample) {
  const element = objectExample[key];
}

objectExample.age = 25

delete objectExample.firstName

// console.log(objectExample)


/*
---
Practical Examples
---
*/

const EXEMPLE_ARRAY = [{
  firstNames: "Rui Miguel",
  lastNames: "Pereira Rigueira",
  birthdate: "29/04/1995",
  city: "Paços de Ferreira",
  country: "Portugal",
  hobbies: ["Football", "Movies", "Music"],
  children: 0,
  NIF: 257810811
}, {
  firstNames: "Pedro Rafael",
  lastNames: "Costa Alves",
  birthdate: "01/06/1998",
  city: "Lousada",
  country: "Portugal",
  hobbies: ["Games", "Movies", "Music"],
  children: 1,
  NIF: 305610243
}, {
  firstNames: "Mariana",
  lastNames: "Lopes Fonseca",
  birthdate: "05/02/1990",
  city: "Lousada",
  country: "Portugal",
  hobbies: ["Movies", "Fashion"],
  children: 0,
  NIF: 215134947
}, {
  firstNames: "Ana Sofia",
  lastNames: "Ribeiro Abreu",
  birthdate: "15/10/1980",
  city: "Paredes",
  country: "Portugal",
  hobbies: ["Music", "Chess"],
  children: 3,
  NIF: 202759174
}]

const EXEMPLE_ARRAY_2 = [
  { NIF: 305610243, phone: 916197017, car: "Dacia Sandero", single: true },
  { NIF: 202759174, phone: 913462251, car: "Renault Clio", single: false },
  { NIF: 257810811, phone: 919846234, car: "Opel Astra", single: true },
  { NIF: 215134947, phone: 933123982, car: "Ford Docus", single: false },
]

// Exercise 1
// create a new array with only the fullname of each individual and its city

const ex1 = EXEMPLE_ARRAY.map((el) => {
  return { fullname: el.firstNames + " " + el.lastNames, city: el.city }
})

// Exercise 2
// sort the EXEMPLE_ARRAY by nº of children

function sorterByChildren(array) {
  array.sort(function (el1, el2) {
    if (el1.children > el2.children) {
      return 1
    } else if (el1.children < el2.children) {
      return -1
    } else {
      return 0
    }
  })
}

sorterByChildren(EXEMPLE_ARRAY)

// Exercise 3
// total nº of children

let childrenCount = 0

EXEMPLE_ARRAY.forEach(function (el) {
  // childrenCount = childrenCount + el.children
  childrenCount += el.children
})

// get the first and last name of each individual, last name only initial
EXEMPLE_ARRAY.map(function (individual) {
  const firstName = individual.firstNames.split(" ")[0]
  const lastName = individual.lastNames.split(" ").at(-1)[0]

  return `${firstName} ${lastName}.`
})

// order the individual by city, create an object with city as key, as an individual array as it property eg. {Lousada: [{}]}

const individualsByCity = {}

EXEMPLE_ARRAY.forEach(function (individual) {
  const objectItem = individualsByCity[individual.city]
  if (objectItem.length) {
    objectItem.push(individual)
  } else {
    objectItem = []
    objectItem.push(individual)
  }
})

// filter individuals by hobbies

function hobbyFilter(array, hobby) {
  return array.filter(function (el) {
    return el.hobbies.includes(hobby)
  })
}

console.log(hobbyFilter(EXEMPLE_ARRAY, "Chess"))

// get the name of the individual with phone 913462251

const nif = EXEMPLE_ARRAY_2.find(function (el) {
  return el.phone === 913462251
}).NIF

const user = EXEMPLE_ARRAY.find(function (el) {
  return el.NIF === nif
})

console.log(user.firstNames + " " + user.lastNames)

/*

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined"
typeof null                   // Returns "object"

In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.

This and scope

https://www.w3schools.com/js/js_scope.asp

https://www.w3schools.com/js/js_this.asp

https://www.w3schools.com/js/js_arrow_function.asp

https://www.w3schools.com/js/js_json.asp

https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

https://code.tutsplus.com/articles/the-best-way-to-deep-copy-an-object-in-javascript--cms-39655
*/