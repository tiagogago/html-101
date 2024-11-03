/*
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

*/

/*

Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

  Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

  Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'


console.log(letterCount("Connect",'c')) // 2

function drEvil(amount) {
  if (amount === 1000000) {
    return amount + " dollars (pinky)";
  } else {
    return amount + " dollars";
  }
}


function verbing(word) {
  if (word.length < 3) return word;
  if (word.slice(-3) == 'ing') {
    return word + 'ly';
  } else {
    return word + 'ing';
  }
}

MixUp
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!

function mixUp(a, b) {
  return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
}

function letterCount(str, c) {
  var count=0;
  str=str.toLowerCase(); //Case insensitive
  for(var i=0;i<str.length;i++){
     if(str.charAt(i)==c){ 
       count++; //Increment count
     }
  }
  return count;
}

console.log(letterCount("Connect",'c')) // 2
console.log(letterCount("first person",'s')) // 2
*/

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");