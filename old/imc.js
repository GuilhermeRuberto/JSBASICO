
const teclado = require('prompt-sync')({sigint:true});

peso = parseFloat(teclado("Digite o peso :"))
altura = parseFloat(teclado("Digite a altura :"))

function calc(peso, altura){
altura = altura / 100;
return peso / (altura*altura);

}
 let buffer = calc(peso, altura)

if(buffer<18.5){
    console.log("Abaixo do Peso")
}
else if(buffer>=18.5 & buffer<=24.9){
    console.log("Peso Normal")
}
else if(buffer>=25 & buffer<=29){
    console.log("Acima do Peso")
}
else if(buffer>=30 & buffer<=35){
    console.log("Obesidade grau 1")
}
else if(buffer>=35 & buffer<=39.9){
    console.log("Obesidade grau 2")
}
else if(buffer>=40){
    console.log("Obesidade grau 3")
}
