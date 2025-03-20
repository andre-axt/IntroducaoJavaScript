console.log("Hello World");

let nome = "andre";
const idade = 17;

function saudacao() {
    console.log("Olá, " + nome);
}

saudacao()

if (idade >= 18) {
    console.log()
}

function verificaPar() {
    let numero = 2;
    if (numero % 2 === 0) {
        console.log("é par");
    }
    else {
        console.log("é impar");
    }
}

verificaPar()

function calcular() {
    let numero1 = 2;
    let numero2 = 3;
    console.log(numero1 + numero2);
    console.log(numero1 - numero2);
    console.log(numero1 * numero2);
    console.log(numero1 / numero2);
}

calcular()

i = 10;
while (i >= 1) {
    console.log(i)
    i--;
}

function inverterTexto(str) {
    let soltarletras = str.split("");
    let inverterletras = soltarletras.reverse();
    let juntar = inverterletras.join("");
    console.log(juntar)
}
let palavra4 = prompt("Fala uma palavra para inverter")
inverterTexto(palavra4)

let palavra = "pastel"
function CountCaracter(str) {
    var n = str.length
    console.log(n)
}
CountCaracter(palavra)


let carro = {
    marca: "toyota",
    modelo: "supra",
    ano: "2008",
    modeloMostrar: function () {
        console.log(this.modelo)
    }

};
carro.modeloMostrar();

function mensagemPersonalizada() {
    let nome = "andre"
    let mensagem = "olá"

    console.log(mensagem, nome)
}
mensagemPersonalizada()

function media() {
    let num1 = 1
    let num2 = 2
    let num3 = 3
    let media = (num1 + num2 + num3) / 3
    console.log(media)
}
media()

for (let i = 1; i < 21; i++) {
    if (i % 3 === 0) {
        console.log(i, "é multiplo de 3");
    }
    else {
        console.log(i);
    }
}

function verificarPalindromo(str) {
    const palavra2 = str;

    let soltarletras = str.split("");
    let inverterletras = soltarletras.reverse();
    let juntar = inverterletras.join("");

    if (palavra2 == juntar) {
        console.log(juntar, "é um palindromo")
    }
    else {
        console.log(juntar, "não é um palimdromo")
    }
}
let palavra1 = prompt("Qual palavra?");
verificarPalindromo(palavra1)



