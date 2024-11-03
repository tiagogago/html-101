//alert('tudo ok');
//1º gerar um número aleatório de 1 a 6
//2º gerar outro
//3º selecionar elemento com a class imag1
//4º modificar o atributo src para a imagem
//5º adapetar o nome da imagem com o dado
//6º selecionar o elemento h1 e indicar o vencedor

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximun is incluse
}

const dado1 = getRandomIntInclusive(1, 6);
const dado2 = getRandomIntInclusive(1, 6);
console.log(dado1, dado2);

const imagem1 = document.querySelector(".img1");
imagem1.src = `images/dice${dado1}.png`;
console.log(imagem1);

const imagem2 = document.querySelector(".img2");
imagem2.src = `images/dice${dado2}.png`;
console.log(imagem2);

const vencedor =
  dado1 > dado2 ? "Player 1 Wins" : dado1 == dado2 ? "Draw" : "Player 2 Wins";

console.log(vencedor);
document.querySelector("h1").textContent = vencedor;
