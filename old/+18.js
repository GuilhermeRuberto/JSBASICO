const teclado = require('prompt-sync')({sigint:true});

idade = parseInt(teclado("Digite a idade :"))

if(idade>=18){
    console.log("Você é maior de idade")
}
else(
    console.log("Você é menor de idade")
)