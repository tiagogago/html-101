//Sem Função

const d1 = 14;
const m1 = 12;
const a1 = 2023;

function exibirData1() {
  console.log(`Dia: ${d1}`);
  console.log(`Mês: ${m1}`);
  console.log(`Ano: ${a1}`);
}

const d2 = 18;
const m2 = 4;
const a2 = 2018;

function exibirData2() {
  console.log(`Dia: ${d2}`);
  console.log(`Mês: ${m2}`);
  console.log(`Ano: ${a2}`);
}

exibirData1();
exibirData1();
exibirData1();

exibirData2();
exibirData2();
exibirData2();

//Com Funções

const d1 = 14;
const m1 = 10;
const a1 = 2023;

function exibirData1(dia, mes, ano) {
  console.log(`Dia: ${dia}`);
  console.log(`Mês: ${mes}`);
  console.log(`Ano: ${ano}`);
}

const d2 = 18;
const m2 = 4;
const a2 = 2018;

exibirData(3, 7, 2020);
exibirData(d1, m1, a1);
exibirData(d2, m2, a2);
exibirData();

//1º Desafio: Soma, Subtrair---------------------------

function somar(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

function subtrair(num1, num2) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
}

somar(3, 4);
subtrair(20, 5);

//2º DEsafio: tabuada-------------------------------------------------------

function tabuada(numTabuada) {
  for (var contador = 1; contador <= 10; contador++) {
    console.log(`${numTabuada} x ${contador} = ${numTabuada * contador}`);
  }
}

tabuada(7);
tabuada(9);

for (var contador = 1; contador <= 10; contador++) {
  tabuada(contador);
}

//3º Desafio: Arvore de natal--------------------------------------

function metadeArvore(simbolo, numLinhas) {
  var caracter = simbolo;

  for (var contador = 1; contador <= numLinhas; contador++) {
    console.log(caracter);
    caracter += simbolo;
  }
}

metadeArvore("?", +10);

// Sem Return-----------------------------

function semReturn() {
  console.log("A função foi chamada!");
}

function retornaSempreUm() {
  return 1;
}

//cost x = semReturn();
const numero = retornaSempreUm();

//console.log(x);
console.log(numero);

// Com Rerturn---------------------------

function returnComTexto(texto) {
  //console.log(texto);

  if (texto) {
    return texto;
  } else {
    return 999;
  }
}

const resultado = returnComTexto();

console.log(resultado);

//4º Desafio: Divisores---------------

function numeroDivisores(numero) {
  var divisores = 2;

  for (var contador = 2; contador < numero; contador++) {
    if (numero % contador == 0) {
      divisores++;
    }
  }

  return divisores;
}

const resultado = numeroDivisores(16);
console.log(resultado);

// 5º Desafio: Primos -----------------------------------------

function numeroDivisores(numero) {
  var divisores = 2;

  for (var contador = 2; contador < numero; contador++) {
    if (numero % contador == 0) {
      divisores++;
    }
  }

  return divisores;
}

const resultado = numeroDivisores(15);

if (resultado == 2) {
  console.log("É Primo!");
} else {
  console.log("Não é primo!");
}

// 6º Desafio: Bixesto------------------------------------------

function eBisexto(ano) {
  if (ano % 4 != 0) {
    return false;
  }
  if (ano % 100 != 0) {
      return true;
    }
  return ano % 400 == 0 ? true : false;
}

if (eBisexto(2023)) {
  console.log('É bissexto!');
} else {
  console.log('Não é bissexto!');
}

// Anonimas

/*function soma (a,b) {
  return a+b;
}

console.log(somar(5,6)); */

var somar = function (a,b) {
  return a+b;
}

console.log(typeof somar);
console.log(somar(3,4));

// var Função--------------------

function somar(a,b); {
  return a+b;
}

console.log(somar(3,4));

var outraVar = somar;

console.log(typeof outraVar);
//console.log(outraVar(7,8));

// 7º Desafio: Par ou Impar--------

const ePar = function (numero) {
  return numero % 2 == 0;
}

console.log(ePar(6));

// Funções Argupados------------------

function executar(fn) {
  console.log(typeof fn);
  console.log(fn ());
}

//executar(3);

function bomDia() {
  return "Bom Dia!";
}

//console.log(bomDia());
executar(bomDia);

const x = bomDia;
const y = bomDia();

console.log(x);
console.log(y);
console.log(x());
console.log(y());

// Default Valeu----------------

function somar (a,b,c,d = 0) {
  console.log(d);
  return a + b + c + d;
}

console.log(somar(3,45,67,6));
console.log(somar(3,45,67));

// Função com Argumentos-------------

function executar (fn, num1, num2) {
  if (typeof fn === 'function') {
    console.log(fn(num1, num2));
  } else {
    console.log('Não é uma função!');
  }
}

function somar (a, b)  {
  return a + b;
}

executar (somar, 4, 5);

//Retorno da Função----------------------

function comRetorno () {
  function bomDia() {
    return "Bom Dia!"
  }
  return bomDia;
}

console.log(comRetorno);
console.log(comRetorno());

const resultado = comRetorno();
console.log(resultado());
// equivalente à linha seguinte
console.log(comRetorno()());

// 8º Desafio: Currying : Soma dos Algarismos

var numero = 327;

while (numero >= 10) {
  var resto = numero % 10;
  console.log(resto);
  numero = (numero - resto) / 10;
}

console.log(numero);

// 9º Desafio: Soma de Algarismos de Funções------

const resto = function(nummero) {
  return numero % 10;
}

const algarimosRestantes = function(numero) {
  return (numero - resto(numero)) / 10;
}

var numero = 327;
var soma = 0;

while (numero >= 10) {
  soma += resto(numero);
  numero = algarimosRestantes(numero);
}

soma += numero;
console.log(soma);

// Definição do Array: Básico-------------------------------

//casa          0  1   2   3  4   5
const notas = [15, 8, 19, 13, 5, 15];

console.log(notas);
console.log(notas[3]);
console.log(notas[10]);

notas[0] = 10;

console.log(notas);

// Push ---------------------------------
const notas = []

console.log(notas);

notas.push(12);
notas.push(7);
notas.push(19);

console.log(notas);
console.log(notas.length);

for(car contador = 0; contador < notas.length; contador++) {
  console.log(`Nota ${contador+1}: ${notas[contador]}`);
}

// Percorrer Array-----------------------------------------------

const notas = [15, 8, 19, 13, 5, 15];

for(var contador = 0; contador < notas.length; contador++) {
  console.log(contador, notas[contador]);
}
//pode ser feito destas formas:
for(var nota of notas) {
  console.log(nota);
}
//ou
for(var indice in notas) {
  console.log(indice,notas[indice]);
}
//ou
notas.forEach(function (valor, indice, array) {
  console.log("Dentro do ForEach", valor, indice, array);
})

// 10º Desafio: Array com Exemplos

const numeros = [5, -6, 8, 9, 0, -1]

//Tem de devolver a quantidade de números negativos
//negativos: 2

function negativosComOf (numerosArray) {
  var negativos = 0;
  for(var numero of numerosArray) {
    if(numero < 0) {
      negativos++;
    }
  }
  return negativos;
}

function negativosComIn (numerosArray) {
  var negativos = 0;
  for(var indice in numerosArray) {
    if (numerosArray[indice] < 0) {
      negativos++;
    }
  }
  return negativos;
}

function negativosComFor (numerosArray) {
  var negativos = 0;
  for(var contador = 0; contador < numerosArray.length; contador++) {
    if (numerosArray[contador] < 0) {
      negativos++;
    }
  }
  return negativos;
}

function negativosComForeach (numerosArray) {
  var negativos = 0;
  numerosArray.forEach(function(numero) {
    if (numero < 0) {
      negativos++;
    }
  })
  return negativos;
}

console.log(negativosComOf(numeros));
console.log(negativosComIn(numeros));
console.log(negativosComFor(numeros));
console.log(negativosComForeach(numeros));

// 11º Desafio: Array parte 2------------------------------------------------

const b = [5, -6, 8, 9, 0, -1, 8, 7, 7]

const numeroIgual = 8;

// Resultado = 2
//posso utilizar qualquer um das maneiras feitas a cima
function contaIguais(arrayNumeros, valor) {
  var resultado = 0;
  arrayNumeros.forEach(function(numero) {
  if (valor == numero) {
    resultado++;
  }
  })
  return resultado;
}

console.log(contaIguais(b, numeroIgual));

// 12º Desafio: Array parte 3---------------------------------

var arrayInteiros = [3, 4, 0, -4, 9, 0, -100];

function convertidorBolean(arrayNum) {
  const arrayBolean=[];
  arrayBolean.forEach(function (inteiro) {
    arrayBolean.push (inteiro > 0)
  });
  return arrayBolean;
}

console.log(convertidorBolean([3, 4, 0, -4, 9, 0, -100]));

// 13º Desafio: Array parte 4----------------------------------

//Entrada de dados: (limiteInferior = 5; limiteSuperior=9; tamanho=5)
//Saida de dados: array de inteiros: [70, 5, 48, 51, 89]
// Math.floor(Math.random() * max - min + 1) + );

function geradorArrayRandomico(limiteInferior, limiteSuperior, tamanho){
  const resultado = [];
  
  for(var contador = 1; contador <= tamanho; contador++){
  resultado.push(
    Math.floor(
      Math.random() * (limiteSuperior - limiteInferior + 1 + limiteInferior)
      )
      );
  }
  return resultado;
}
function devolverMaior(numeros) {
  var maior = numeros[0];
//Percurrer o array desde o indice 1 até ao final - numeros.length
//Verificar se o valor > menor então o maior = valor
for(var contador = 1; contador < numeros.length; contador++) {
  if (numeros[contador] > maior) {
    maior = numeros[contador];
  }
}
  return maior;
}
const arrayInteiros = geradorArrayRandomico(1,10,6);
console.log(arrayInteiros);
console.log(devolverMaior(arrayInteiros));

// Objeto - Inicio----------------------------------------------------

const produto = {
  nome: 'Caneta',
  preco: 4.55,
  cor: 'azul',
};

console.log(typeof produto);

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.cor);
//ou podemos usar este console.log desta maneira
console.log(produto['cor']);

//Objeto: O this -------------------------------------

const produto = {
  nome: 'Caneta',
  preco: 4.55,
  cor: 'azul',
  desconto: 0.2,
  precoComDesconto: function() {
    return this.preco * (1 - this.desconto);
  }
};

console.log(produto.nome);
//console.log(preco); ERRO
console.log(produto.preco);
console.log(produto.precoComDesconto());

//Obejeto Valores-------------------------------

const produto = {
  nome: 'Caneta',
  preco: 4.55,
  cor: 'azul',
  caracteristicas: {
    peso: 34,
    tamanho: 3,
    coresDisponiveis: ['Verde', 'Vermelho']
  },
  localidades: [
    {
      rua: 'Abc',
      numero: 4
    },
    {
      rua: 'xpto',
      numero: 10
    }
  ]
};

produto.nome = 'Lápis';
produto.tamanho = 3;

console.log(produto);
console.log(produto.caracteristicas.coresDisponiveis);
console.log(produto.caracteristicas.coresDisponiveis.includes('Vermelho'));

console.log(produto.localidades[1].rua);

// Retorna Objeto---------------------------------------------------------------

function retornaData(dia, mes, ano) {
  const data = {
    dia: dia,
    mes: mes,
    ano: ano,
    exibir: function () {
      console.log(`${this.dia}/${this.mes}/${this.ano}`);
    }
  }
  return data;
}

const data1 = retornaData(20,10,2024);
const data2 = retornaData(12,5,2021);

console.log(data1);
console.log(data2);
console.log(data2.mes);
data1.exibir();

// Class Data--------------------------------------------------

class Data {
  constructor (dia = 1, mes = 1, ano = 2023) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  exibir() {
    console.log(`${this.dia}/${this.mes}/${this.ano}`);
  }
}

const d1 = new Data();
console.log(d1);
const d2 = new Data(20,10,2023);
console.log(d2);
d2.exibir();

//14º Desafio: Elevador------------------------------------

class Elevador {
  constructor(capacidade, totalPisos) {
    this.capacidade = capacidade;
    this.totalPisos = totalPisos;
    this.pisoAtual = 0;
    this.lotacaoAtual = 0;
  }
  subir() {
    if (this.totalPisos > this.pisoAtual) {
      this.pisoAtual++;
      console.log('Piso atual: ', this.pisoAtual);
    } else {
      console.log("O elevador já está no piso superior!");
    }  
  }

  descer() {
    if (this.pisoAtual > 0){
      console.log('Piso atual: ', --this.pisoAtual);
  } else {
    console.log("Não é possível descer mais!");
  }
  }

  entrar(numPessoas) {
    if ((numPessoas + this.lotacaoAtual) <= this.capacidade) {
      console.log('Lotação atual: ', this.lotacaoAtual);
    } else {
      console.log("Este elevador não tem espaço para essa quantidade de pessoas");
    }
  } 
  sair(numPessoas) {
    if ((this.lotacaoAtual - numPessoas) >=0) {
      this.lotacaoAtual -= numPessoas;
      console.log('Lotação atual: ', this.lotacaoAtual);
    } else {
      console.log("Erro: não existem essas pessoas!");
    }
  }
}

const elevador1 = new Elevador(5,4);
console.log(elevador1);
elevador1.subir();
elevador1.subir();
elevador1.descer();
elevador1.descer();
elevador1.descer();
elevador1.entrar(3);
elevador1.entrar(2);
elevador1.sair(3);
elevador1.sair(2);

// Numbers------------------------------------------------------

const num1 = 1;
const num2 = "2";
const num3 = Number("3");

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

const num4 = Number(num2);

console.log(typeof num4);

const a = '1';
const b = 1;

console.log(typeof a);
console.log(typeof b);

const c = String(b);
console.log(typeof c);
console.log(b.length);
console.log(c.length);

//15º Desafio----------------

function devolverNumeros(arrayNumeros, tamanho) {
  const numeros = [];
  //percorrer o array de numeros
  //para cada valor, verificar o tamanho
  //se tamanho do valor == tamanho, adicionar a um array
  //desenvolver esse array
  arrayNumeros.forEach( function(numero) {
    //console.log(numero,numero.length,String(numero).length);
    if (tamanho === numero.toString().length){
      numeros.push(numero);
    }
  })

  return numeros;
}

console.log(devolverNumeros([-5,75,123,4,53], 2));

//16º Desafio: Data--------------------------------------------------

function escreverData() {
  const dataAtual = new Date();

  const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']
  const dia = dataAtual.getDay();
  var horas = dataAtual.getHours();
  const periodo = horas > 11 ? 'PM' : 'AM';
  horas = horas > 12 ? horas - 12 : horas;
  horas = horas <10 ? "0" + horas : horas;
  var minutos = dataAtual.getMinutes();
  minutos = minutos <10 ? "0" + minutos : minutos;

  console.log(`Dia da semana: ${dias[dia]}`);
  
  console.log(dataAtual.getHours());
  console.log(`Hora atual: ${horas}:${minutos} ${periodo}`);
}

escreverData();

// Revisões: Data--------------------------------------------------------------------------------------------------------

function diaSemanaData(dia, mes, ano) {
  const data = new Date(ano ,mes -1, dia);
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const diaSemana = data.getDay();

  return dias[diaSemana];
}

console.log(diaSemanaData(28,2,1974));

// 17º Desafio: String 1º parte-----------------------------------------------------

//Entrada: frase, posição
//Saída: frase sem caracter dessa posição
//Exemplo: ("JavaScript é fácil", 5);
//Resultado: "Javacript é fácil";

const str = "JavaScript é fácil";
const posicao = 5;
function removerCaracterDaPosicao(str, pos){
  let result = "";
  for (let i=0;i<pos;i++){
    if(str[i]){
      result += str[i];
    }
  }
      
  for (let j=pos+1;j<=str.length-1;j++){
    if(str[j]){
      result += str[j];
    }
  }
    return result;
 }

 console.log(removerCaracterDaPosicao(str, posicao))

 //ou-------------------------------------------------------------

function removerCaracter(frase, posicao) {
  return frase.substring(0,posicao -1) + frase.substring(posicao);
 }

 console.log(removerCaracter("JavaScript é fácil", 5));

 // 18º Desafio: String Parte 2º---------------------------------------

 // Entrada: Frase
 // Saida: inteiro - número de palavras
 // Exemplo: ("JavaScript é fácil")
 // Resultado: 3;
 
 function contarPalavrasNaFrase(frase){
  const words = frase.split(' ').filter(word => word !== '');
  return words.length;
  }
  console.log(contarPalavrasNaFrase("JavaScript é fácil"));

  //ou---------------------------------------------------------

  function contarPalavras(frase) {
    return frase.trim().split(' ');
  }

  console.log(contarPalavras("JavaScript é fácil"));

  // LET------------------------------------------------

  function testeScope() {
    var varForaDoIf = "fora do if";
    let letForaDoIf = "let fora if";
    if (true) {
      var varDentro = "dentro";
      let letDentro = "dentro do let";
      console.log(varDentro);
      console.log(letDentro);
    }

    console.log(varDentro);
    //console.log(letDentro);
    console.log(varForaDoIf);
  }

  function aposVariavel() {
    mensagem = "xpto";
    console.log(mensagem);
    var mensagem;
  }

  testeScope();
  aposVariavel();

  // LIFE---------------------------------

  const x = function() {
    var a = 1;
    console.log('IIFE - Imediatamente executada...');
    if(true) {
      console.log(a);
    }
    console.log(a);
    } ();

  //Destructuring-----------------------------------------

  const pessoa = {
    nome: "Paulo",
    idade: 30,
    endereco: {
      rua:"Rua da Avenida",
      localidade: "Faro"
    }
  };

  /* const nome = pessoa.nome;
  const idade = pessoa.idade;
  console.log(nome,idade); */

  const {nome: n, idade: i } = pessoa;
  console.log(n, i);

  //Destructuring: Array--------------------

  const array = [3,4,8,10];

  const[x,,y] = array;
  console.log(x,y);

//Destructuring: Function---------

const pessoa = {
  nome: "Paulo",
  idade: 30,
  endereco: {
    rua:"Rua da Avenida",
    localidade: "Faro"
  }
};

function escreverNome({nome = "Vazio"}) {
  console.log(nome);
}

escreverNome(pessoa);//nome: paulo
escreverNome('');//nome: vazio
escreverNome(); //Erro

//Spread--------------------------------------

const pessoa = {
  nome: "Paulo",
  idade: 30,
  endereco: {
    rua:"Rua da Avenida",
    localidade: "Faro"
  }
};

const pessoa2 = {...pessoa};
console.log(pessoa2);

pessoa.nome = "Maria";
console.log(pessoa);
console.log(pessoa2);

const arrayNumero

//REST-----------------------------

function somarNumeros(...numeros) {
  console.log(numeros);
  var total = 0;
  numeros.forEach(function (numero) {
    total += numero;
  });
  console.log(total);
}

somarNumeros(4,5,7,8);

console.log(Math.max(45,5,67,8));
// ou....
console.log(Math.max(...[45,5,67,8]));

//Rest vs Spread-------------------------------------

function myBio(firstName, lastName, ...otherInfo) {
  console.log(firstName);
  console.log(lastName);
  console.log(otherInfo);
}

myBio("Fernando","Lira","Flag","Jscript","Rest")

//Spread
const dados = ["Fernando", "Lira", "Flag"];

function escreverDados(firstName, lastName, company) {
  console.log(`${firstName} ${lastName} - ${company}`);
}

escreverDados(...dados)

//CONFLITO--------------------------------------------------

const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  }
}

pessoa.falar();

const novaFalar = pessoa.falar.bind(pessoa);

console.log(typeof novaFalar);

novaFalar();

//BIND-------------------------------------------
//primeira solução do bind
function Aluno() {
  this.idade = 0;

  setInterval(function () {
  this.idade++;
  console.log(this.idade);
  }.bind(this), 1000);
}

new Aluno;

//2 solução para o bind

function Aluno() {
  this.idade = 0;

  const self = this; //criamos um novo contexto de escopo
  setInterval(function () {
  console.log(this.idade);
  }.bind(this), 1000);
}

new Aluno;

//ARROW------------------------------------------------------

function dobro(numero) {
  return numero *2;
}

console.log(dobro(2));

const dobroAnonimo = function(numero) {
  return numero * 2;
}

console.log(dobroAnonimo(2));

const dobroArrow = (numero) => numero * 2;

console.log(dobroArrow(2));

//ARROW SEM BIND-------------------------------
function Pessoa() {
  this.idade = 0;
  setInterval(() => {
  this.idade++;
  console.log(this.idade);
  },1000);
  }
  new Pessoa;

  //CALL BACK-----------------

  const fabricantes = ['Audi', 'BMW', 'Opel'];

  const escreverValor = (valor,indice) => console.log(valor,indice);

  fabricantes.forEach(escreverValor)

  //FILTER------------------------------------------------------------

  const notas = [8, 12, 9, 19, 17, 15];

  const passouNaProva = (nota) => nota >= 10;

  const alunosPassaram = notas.filter(passouNaProva);

  console.log(alunosPassaram);

  //ARRAY´S--------------------------------------------

  const capitais =['Lisboa', 'Madrid', 'Londres', 'Paris'];

  capitais.shift();//retira o 1 nome da lista
  console.log(capitais);

  capitais.unshift('Bruxelas');//coloca ele em 1 lugar
  console.log(capitais);

  capitais.push('Qualquer');//acrescenta um nome no final
  console.log(capitais);

  capitais.splice(2,1);//no proprio array ele elimina, acrescenta e mudifica o proprio array
  console.log(capitais);

  const capitais2 = capitais.slice(2);//modifica quaquer array indicado
  console.log(capitais2);

  //MAP------------------------------------------------------------------------------------------

  const numeros = [4, 2, 5, 6];

  const dobro = (numero) => numero * 2;

  const novonumeros = numeros.map(dobro);

  console.log(novonumeros);

  //MAP - OBJECTOS---------------------------

  const carrinho = [
    {
      nome: 'Caneta',
      preco: 4,
      tamanho: 'S'
    },
    {
      nome: 'Monitor',
      preco: 400,
      tamanho: '27'
    },
    {
      nome: 'Teclado',
      preco: 40,
      tamanho: 'XL'
    }
  ]

  carrinho.forEach(elemento => console.log(elemento.preco));//preco ou tamanho ou nome
  const precos = carrinho.map(elemento => elemento.preco).filter(preco => preco > 10);//exemplo de filtragem de precos
  console.log(precos);
  console.log(Math.max(...precos));

const precoMaior = elemento => elemento.preco > 10;
const tamanhoCerto = elemento => elemento.tamanho == 'XL';
const exemploDuploFiltro = carrinho.filter(precoMaior).filter(tamanhoCerto);
console.log(exemploDuploFiltro);

var somaPrecos = carrinho
                    .map(elemento => elemento.preco)
                    .reduce( (total, preco) => {
                      console.log(total, preco);
                      return total + preco;
                    });
console.log(somaPrecos);

//REDUCE----------------------------------------------------------------------------------------------------------------------

const produto = [
  {nome: "Samsung S21", preco: 800, fragil: true},
  {nome: "Iphone 12", preco: 900, fragil: true},
  {nome: "Tablete Lenovo", preco: 300, fragil: true},
  {nome: "Portátil ASUS", preco: 800, fragil: false},
];
produto.forEach((item)=>{
  if(item.fragil){
    item.preco *= 1.5;
    }
    });
    console.log(produto);
    
const produtosCarregados = produto.filter((produto)=> produto.fragil === true);
console.log(produtosCarregados);

//1 - Todos os produtos são frageis?
//2 - Algum produto é frágil?

