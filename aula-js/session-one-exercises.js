/*

JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

check https://www.w3schools.com/js/js_functions.asp
*/

// Some examples

// Lets assume we want to check if a certain string has length, how we do it?
// if the string has no length it should return a message saying "No length"
// if it has length it should return a message saying "Yey. We have length"
// ps. whitespaces should count as no length

// We want to check if a certain string has a certain word (string)
// if said string has that word, we return the string without it
// if said string doesn't contain that word, we return a message saying "It's clear"

// I want a function to help me not exceed a n maximum characters
// the function receives a string and the maximum number of characters
// the return string should end with ...

// I want a helper function that adds a string to the end and start of another one
// except if that string already contains that value at it start or end

// Exercise 1
// Create a function that returns a new array without a said item

// Exercise 2
// function that clear an array from all elements that are not numbers
// if no element pass that validation
// return a message saying "Not found!"

// Exercise 3
// create a function that accepts and array and returns a new one with only unique items (remove duplicated ones)

/**
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */

// shallow copy e deep copy
