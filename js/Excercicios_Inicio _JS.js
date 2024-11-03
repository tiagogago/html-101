console.log("Olá Mundo");
console.log("Olá Mundo outra vez!");

{
  console.log("Olá Mundo");
  console.log("Olá Mundo outra vez!");
}

//------------------------------------

console.log(typeof 5.5);
console.log(typeof 5);
var idade = 10;
console.log(typeof idade);
var isApproved = true;
console.log(typeof "Carla");
console.log(typeof true);

//-------------------------------------

var a = 5;
console.log(a);
a = 8;
console.log(a);

//-------------------------------------

//Área da circunferência

var raio = 4;
const PI = Math.PI; //const PI = 3.14
console.log("PI " + PI);

var area = PI * raio * raio;

//-------------------------------------

console.log(3 % 2);

const milha = 1.609344;

var totalMilhas = 200;

var totalKm = totalMilhas * milha;

console.log("Milhas: " + totalMilhas + "<=> Km: " + totalKm);

//-----------------------------------------------------------

var a = 1;
var b = "1";

console.log(typeof a);
console.log(typeof b);

console.log(a == b);
console.log(a === b);

console.log(a != b);
console.log(a !== b);

console.log(a == b);
console.log(typeof a == typeof b);
console.log(a == b && typeof a == typeof b); // abreviatura a === b

//-----------------------------------------------------------------

var a = 3;

console.log(a);

a = a + 5;

console.log(a);

a += 4; //a = a + 4

console.log(a);

var nome = "António";
console.log(nome);
nome += "Silva";
console.log(nome);

var b = 5;
b = b + 1; //6
b += 1; //7
b++; //8
++b; //9
console.log(b++);
console.log(b);

//-------------------

var temDinheiro = true;
var estaSol = false;

var resultadoE = "#1 - Vai para o shopping?";

console.log(temDinheiro);
console.log(estaSol);

console.log(temDinheiro && estaSol);

resultadoE += temDinheiro && estaSol;

console.log(resultadoE);

//--------------------------------------------

var temDinheiro = true;
var estaSol = false;
var temCarro = false;

var resultadoE = "#1 - Vai para o shopping?";
var resultadoOu = "#2 - Vai para a praia?";

console.log(temDinheiro);
console.log(estaSol);

console.log(temDinheiro && estaSol);

resultadoE += temDinheiro && estaSol;

resultadoOu += estaSol || temCarro;

console.log(resultadoE);
console.log(resultadoOu);

//---------------------------------------------

console.log(!true);

var x = 1;
var y = 2;
console.log(++x == y++ && y == 2);

//----------------------------------

console.log(true);
console.log(!true);
console.log(!!true);

console.log("texto");
console.log(!"texto");
console.log(!!"texto");

console.log(0);
console.log(!0);
console.log(!!0);

//----------------------

var numero = 5;
const resultado = 5 % 2 == 0 ? "Par" : "Impar";
console.log(resultado);

//---------------------------------------------

const numero = 25;

const cardinalidade = numero % 2 == 0 ? "Par" : "Impar";

console.log("O número " + numero + " é " + cardinalidade);

//---------------------------------------------------------

const numero = 4;

const resultado = numero >= 0 ? "Positivo" : "Negativo";

console.log("O número " + numero + " é " + resultado);

//----------------------------------------------------------

if (7 > 4) {
  console.log("Vai escrever esta linha");
  console.log("Vai escrever esta também");
}

if (10 > 8) {
  console.log("Não vai escrever esta linha");
  console.log("E vai escrever a do falso");
}

// sintaxe boa pratica
if (condicao) {
  linha true de codigo;
} else {
  linha false de codigo;
}

condicao ? linha true de codigo : linha false de codigo

//equivalete
if (condicao) {
  linha de codigo;
  linha de codigo;
  linha de codigo;
}

//--------------------------------------------------------

console.log("Terminou a execução");

const nota = 12;
const bomComportamento = true;

if (nota >= 9.5 && bomComportamento) {
  console.log("Parabéns!");
}

if (nota < 9.5 || !bomComportamento) {
  console.log("É uma pena!!");
}

//---------------------------------------

const avaliacao = 12;

if (avaliacao >= 0 && avaliacao < 4) {
  console.log("Insuficiente");
}

if (avaliacao >= 4 && avaliacao < 9.5) {
  console.log("Suficiente");
}

if (avaliacao >= 9.5 && avaliacao < 14) {
  console.log("Bom");
}

if (avaliacao >= 14 && avaliacao < 18) {
  console.log("Bom");
}

if (avaliacao >= 18 && avaliacao < 20) {
  console.log("Muito Bom");
}

if (avaliacao > 20 || avaliacao < 0) {
  console.log("Nota invalida!");
}

//-------------------------------------------

const hora = 15;

if (hora < 12) {
  saudacao = "Bom dia";
} else {
  saudacao = "Boa tarde";
}

console.log(saudacao);

//-------------------------

const numA = 12;
const numB = 15;

var maior = numB;

if (numA > numB) {
  maior = numA;
}

console.log(maior);

//-------------------

const numA = 15;
const numB = 12;
const numC = 17;

if (numA > numB && numA > numC) {
  console.log(numA);
} else {
  if ( numB > numC) {
    console.log(numB);
  } else {
    console.log(numC);
  }
}

//---------------------------------

const mes = 4;

var dias;

if (mes == 2) {
  dias = 28;
}

if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
  dias = 30;
} else {
  dias = 31;
}

console.log(dias);

//-----------------------------------------------------

const ano = 2000;

if (ano % 4 !=0) {
  console.log("Não é bissexto!");
} else {
  if (ano % 100 !=0) {
    console.log("É bissexto!");
  } else {
    if (ano % 400 == 0) {
      console.log("É bissexto!");
    } else {
      console.log("Não é bissexto");
    }
  }
}

//ou
//Ano é bissexto quando:
//é divisivel por 4 e não é divisivel por 100
//é divisivel por 4 e (é divisivel por 100 e divisivel por 400)

const ano = 1900;

if ((ano % 4 == 0 && ano % 100 !=0) || (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)) {
  console.log("Ano é bissexto");
} else {
  console.log("Ano não é bissexto!");
}

//---------------------------------------------------------------------------------------------

const mes = 4;
var mesExtenso;

switch (mes) {
  case 1: mesExtenso = 'Janeiro'; break;
  case 2: mesExtenso = 'Fevereiro'; break;
  case 3: mesExtenso = 'Abril'; break;
  case 4: mesExtenso = 'Março'; break;
  default: mesExtenso ='Mês inválido';
}

console.log(mesExtenso);

//-----------------------------------------

for (var contador = 1; contador <=10; contador++) { // ou contador += 
  console.log(contador);
  //numeros para ficarem lentos: for(var lento=1; lento < 1000000000; lento++);
}

//-------------------------------------------------------------------------------

const a = 3;
const b = 5;

console.log("a=" + a + " b=" + b);

console.log(`a= ${a} e b= ${b}`);

//---------------------------------

const tabuada = 8;

for (var contador = 1; contador <=10; contador++) {
  console.log(`${tabuada} x ${contador} = ${tabuada * contador}`);
}

//-----------------------------------------------------------------

//const tabuada = 8;
// novo ciclo for para repetir a instrução seguinte 10 vezes

for (var tabuada = 1; tabuada <=10; tabuada++) {
  console.log(`Tabuada do ${tabuada}`);
  for (var contador = 1; contador <=10; contador++) {
    console.log(`${tabuada} x ${contador} = ${tabuada * contador}`);
  }
  console.log('');
}

//-----------------------------------------------------------------

var caracter = "#";

for (var contador = 1; contador <=6; contador++) {
  console.log(caracter);
  caracter = caracter + "#"; //ou caracter += "#"
}

//------------------------------------------------------------------

for (var caracter = "@"; caracter != "@@@@@@@"; caracter += "@") {
  console.log(caracter);
}

//------------------------------------------------------------------

//console.log(Math.floor(3/2));
//console.log(Math.ceil(3/2));
//console.log(Math.round(3/2));

//base = 7
//espaços = base / 2 = 3.5 -> arred baixo = 3
//linhas = base / 2 = 3.5 -> arred cima = 4

//   # 3 espaços
//  ### 2 espaços
// ##### 1 espaço

const base = 7;
const linha = Math.ceil(base / 2);
var numEspacos = Math.floor(base / 2);

var caracter = "#";
var espacos = "";

for(var numLinha = 1; numLinha <= linha; numLinha++) {
  espacos = "";
  for(var i = 1; i <= numEspacos; i++) {
    espacos += '-';
  }
  numEspacos--
  console.log(espacos+caracter);
  caracter += "##";
}

//exer para espaços
//const numEspacos = 3;

var espacos = "";

for(var i = 1; i <= numEspacos; i++) {
  espacos += '-';
}

console.log(espacos);

//------------------------------------------------------

for(var contador = 1; contador <= 10; contador++) {
  console.log(contador);
}

var contadorWhile = 1;
while (contadorWhile <= 10) {
  console.log(contadorWhile++);
}
 //-----------------------------------------------------

 var contadorDoWhile = 100;
 do {
  console.log(contadorDoWhile);
 } while (contadorDoWhile <= 10);

 //--------------------------------

 for(var contador = 1; contador <= 10; contador++) {
  if (contador == 3) {
    break; //ou continue = para nesta função e passa para a próxima
  }
  console.log(contador);
 }

 //------------------------------------------------------------------

 var a;
 var b = 7;
 var c = null;

 console.log(a);
 console.log(b);
 console.log(c);
 console.log(a+b);
 console.log(b+c);

 //-----------------
 //número aleatorios

 var min = 1;
 var max = 20;

 var aleatorio = Math.floor(Math.random() * (max - min + 1) + min)

 console.log(aleatorio);

 //-----------------------------------------------------------------

 //1º escrever um número aleatório entre 1 e 100
 //2º escrever 5 números aleatórios usando o FOR
 //3º definir a constante n = 8
 //4º escrever N números aleatórios
 //5º se for o primeiro número gerado então o maior = primeiro número gerado.
 //   No final, devo escrever o maior
 //5a - definir a variavel maior (sem inicializar)
 //5b - no contador == 1 então o maior == aleatorio
 //5c - no final do ciclo, escrever maior
 //6º senao comparar o aleatório com o maior.
 //   se o aleatório for maior que o maior, maior = aleatório

 const min = 1;
 const max = 100;
 const n = 8;
 var maior;
 var menor;
 
 for(var contador = 1; contador <= n; contador++) {
  var aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(aleatorio);
  if (contador == 1) {
    maior = aleatorio;
    menor = aleatorio;
  } else {
    if (aleatorio > maior) {
      maior = aleatorio;
      console.log('Maior intermédio: '+ maior);
    }
    if (aleatorio < menor) {
      menor = aleatorio;
      console.log('Menor Intermédio: '+ menor);
    }
  }
 }
 console.log('Maior é: '+ maior);
 console.log('Menor é: '+ menor);

 //---------------------------------------------------------------------------------------

 const min = 1;
 const max = 100;
 const n = 8;
 var maior;
 var menor;
 var contador = 1;

 // for (var contador = 1; contador <= n; contador++) {
 while(contador <=10) {
  var aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(aleatorio);

  if (contador == 1) {
    maior = aleatorio;
    menor = aleatorio;
  } else {
    if (aleatorio > maior) {
      maior = aleatorio;
      console.log('Maior intermédio: '+ maior);
    }
    if (aleatorio < menor) {
      menor = aleatorio;
      console.log('Menor Intermédio: '+ menor);
    }
  }
  contador ++;
 }
 console.log('Maior é: '+ maior);
 console.log('Menor é: '+ menor);
 
 //---------------------------------------------------------------------

const min = 1;
const max = 100;
const n = 10;
var menor = min;
var menor = max;
var sequencia = 0;
var numAnterior = min -1;
var maiorSequencia = 1;
var todosNumeros = " ";
var frase = " ";
var maiorFrase = " ";

for (var contador = 1; contador <= n; contador++) {
  var aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(aleatorio);

  todosNumeros = todosNumeros + aleatorio + " ";

  if (aleatorio > numAnterior) {
    sequencia++;
    frase = frase + aleatorio + " ";
  } else {
    if (sequencia > maiorSequencia) {
      maiorSequencia = sequencia;
      maiorFrase = frase;
    }
    sequencia = 1;
    frase = aleatorio + " ";
  }
  numAnterior = aleatorio;
}

console.log("Nº de sequência é: " + maiorSequencia);
console.log("Números: " + todosNumeros);
console.log("Sequência: " + maiorFrase);

//----------------------------------------------------

const numero = 6;
var ePrimo = true;
var contador =2;

while (contador < numero && ePrimo) {
  console.log(contador);
  if (numero % contador == 0) {
    ePrimo = false;
  }
  contador++;
}


if (ePrimo) {
  console.log('É primo');
} else {
  console.log('Não é primo');
}

//--------------------------------------

var totalPrimos = 0;

for (var numero = 2; numero < 1000; numero++) {
  var ePrimo = true;
  var contador = 2;
  
  while (contador < numero && ePrimo) {
    if (numero % contador == 0){
      ePrimo = false;
    }
    contador++;
  }
  if (ePrimo) {
    totalPrimos++;
  }
}

console.log(totalPrimos);

//------------------------------------------------

const divisor = 9;
const dividendo = 2;

var subtracoes = 0;
var sub1 = divisor;

do {
  sub1 = sub1 - dividendo;
  subtracoes++;
} while (sub1 >= dividendo);

console.log('divisão inteira: ', subtracoes);

//---------------------------------------------

const numero  = 30;
var soma = 0;

for (var contador = 1; contador < numero; contador++) {
  if (numero % contador == 0) {
    soma += contador;
  }
}

if (soma == numero) {
  console.log('É um número perfeito!');
} else {
  console.log('É não é um número perfeito! ');
}

//--------------------------------------------------------

var numero = 327

/* output =
// 7
// 2
// 3

numero % 10 = 7
numero = Math.floor(numero/10) // 32.7 -> 32

32% 10 = 2
Math.floor(32/10)

3 */

while (numero >= 10) {
  console.log(numero % 10);
  numero = Math.floor(numero/10)
}

console.log(numero);