
const teclado = require('prompt-sync')({sigint:true});

peso = parseFloat(teclado("Digite o peso :"))
altura = parseFloat(teclado("Digite a altura :"))

altura = altura / 100;
imc = peso/(altura*altura);

if(imc<18.5){
    console.log("Abaixo do Peso")
}
else if(imc>=18.5 & imc<=24.9){
    console.log("Peso Normal")
}
else if(imc>=25 & imc<=29){
    console.log("Acima do Peso")
}
else if(imc>=30 & imc<=35){
    console.log("Obesidade grau 1")
}
else if(imc>=35 & imc<=39.9){
    console.log("Obesidade grau 2")
}
else if(imc>=40){
    console.log("Obesidade grau 3")
}