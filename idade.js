function verificaridade() {
    const idade = parseInt(document.getElementById('idade').value);

    if (isNaN(idade) || idade < 0) {
        document.getElementById('resultadoidade').innerText = 'Não naceu ainda?';
        return;
    }

    let mensagem = '';
    if (idade >= 18) {
        mensagem = 'Vai trabalhar';
    } else {
        mensagem = 'Enzão';
    }

    document.getElementById('idadeResult').innerText = mensagem;
}