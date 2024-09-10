
const teclado = require('prompt-sync')({sigint:true});

numero = parseFloat(teclado("Digite um numero :"))

resultado = numero%2

if(resultado==0){
    console.log("O seu numero é par")
}
else(console.log("O seu numero é impar"))
