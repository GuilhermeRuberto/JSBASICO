function calculateIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('imcResult').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = calculateIMCValue(peso, altura);
    let category = '';

    if (imc < 18.5) {
        category = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        category = 'Peso Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        category = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        category = 'Obesidade I';
    } else if (imc >= 35 && imc <= 39.9) {
        category = 'Obesidade II';
    } else if (imc >= 40) {
        category = 'Obesidade III';
    }

    document.getElementById('imcResult').innerText = `Seu IMC é ${imc.toFixed(2)} - ${category}`;
}

function calculateIMCValue(peso, altura) {
    altura = altura / 100; // Convert cm to meters
    return peso / (altura * altura);
}
