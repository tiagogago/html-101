import { products } from "./data.js";
import { myFetch } from "./api.js";

export function getProducts() {
  return products;
}

export function getApiProducts() {
  //    return myFetch;
}

export function validateInput(input) {
  const emailRegExp = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // expressão regular para validar email
  return input.length && emailRegExp.test(input) ? true : false;
  // operador ternário
}
