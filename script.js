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

function verificaPar(){
    let numero = 2;
    if (numero % 2 === 0){
        console.log("é par");
    }
    else{
        console.log("é impar");
    }
}

verificaPar()

function calcular(){
    let numero1 = 2;
    let numero2 = 3;
    console.log(numero1 + numero2);
    console.log(numero1 - numero2);
    console.log(numero1 * numero2);
    console.log(numero1 / numero2);
}

calcular()

i = 10;
while (i >= 1){
    console.log(i)
    i--;
} 

function inverterTexto(str){
    let soltarletras = str.split("");
    let inverterletras = soltarletras.reverse();
    let juntar = inverterletras.join("");
    console.log(juntar)
}
inverterTexto("javascript")

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
    modeloMostrar: function(){
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

function media(){
    let num1 = 1
    let num2 = 2
    let num3 = 3
    let media = (num1 + num2 + num3)/3
    console.log(media)
}
media()

for (let i = 1; i < 21; i++) {
    if(i % 3 === 0){
        console.log(i, "é multiplo de 3");
    }
    else{
        console.log(i);
    }
}

function verificarPalindromo(){
    let palavra1 = "arara";
    let palavra2 = "arara";
    function inverterTexto(str){
        let soltarletras = str.split("");
        let inverterletras = soltarletras.reverse();
        let juntar = inverterletras.join("");
        console.log(juntar)
    }
    inverterTexto(palavra2)
    if (palavra1 == palavra2){
        console.log("É palindromo")
    }
    else{
        console.log("Não é um palimdromo")
    }
}
verificarPalindromo()



