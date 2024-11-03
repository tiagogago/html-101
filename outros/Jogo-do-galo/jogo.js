//1º passo - clicar em qualquer cell e aparecer o x.png
//2º passo - selecionar todas as cells
//3º passo - pendurar um evento on click em que chama uma função
//4º passo - a funcão deve adicionar a tag img e carregar imagem
//5º passo - evitar colocar varios X na mesma celula
//DICA: node chids
//6º passo - adicionar imagem
//7º passo - indicar jogador a jogar
//8º passo - selecionar div turn
//9º passo - no innerhtml indicar : jogador : <img src=''>
//10º passo - colocar numa função
//11º passo - chamar a função quando muda de jogador
//12º passo - chamar função inicial

const possibilidades = [
  { p1: 0, p2: 1, p3: 2 },
  { p1: 3, p2: 4, p3: 5 },
  { p1: 6, p2: 7, p3: 8 },
  { p1: 0, p2: 3, p3: 6 },
  { p1: 1, p2: 4, p3: 7 },
  { p1: 2, p2: 5, p3: 8 },
  { p1: 0, p2: 4, p3: 8 },
  { p1: 2, p2: 4, p3: 6 },
];

var jogadorAtual = "x.png";
var existeVitoria = false;

const verificarVitoria = () => {
  for (let possibilidade of possibilidades) {
    if (
      cells[possibilidade.p1].childNodes.length > 0 &&
      cells[possibilidade.p1].innerHTML == cells[possibilidade.p2].innerHTML &&
      cells[possibilidade.p1].innerHTML == cells[possibilidade.p3].innerHTML
    )
      return true;
    {
      console.log("Há uma vitória");
    }
    console.log("Não há vitória");
  }
};
const atualizarJogador = () =>
  (turn.innerHTML = `Jodador: <img src='images/${jogadorAtual}' width= 15px />`);
const cells = document.querySelectorAll(".cell");
const turn = document.querySelector(".turn");
atualizarJogador();

console.log(cells);
cells.forEach((cell) => {
  cell.onclick = e => {
    const cell = e.currentTarget;
    if (cell.childNodes.length == 0 && !existeVitoria) {
      const image = document.createElement("img");
      image.src = "images/" + jogadorAtual;
      cell.appendChild(image);
      jogadorAtual = jogadorAtual == "x.png" ? "o.png" : "x.png";
      existeVitoria = verificarVitoria();
      atualizarJogador();
    }
  };
});

const restart = document.querySelector("span");
restart.style.cursor = "pointer";
restart.onclick = (e) => window.location.reload();
