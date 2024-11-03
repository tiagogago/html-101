const cars = { BMW: 3, Tesla: 2, Toyota: 1 };

console.log(Object.keys(cars));
console.log(cars.BMW); //esta...
console.log(cars["BMW"]); //ou esta

const valores = Object.keys(cars).map((chave) => cars[chave]); //Object.keys(cars).map( chave => cars[chave]) esta ou...
console.log(valores);

console.log(Object.values(cars)); //esta

for (let [chave, valor] of Object.entries(cars)) {
  console.log(`Key: ${chave} Valor: ${valor}`);
}
