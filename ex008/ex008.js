function gerarMultiplos() {
    let base = parseInt(prompt("Digite o número base:"));
    let quantidade = parseInt(prompt("Digite a quantidade de múltiplos:"));
    let multiplos = [];

    for (let i = 1; i <= quantidade; i++) {
        multiplos.push(base * i);
    }

    document.getElementById("resultado").innerHTML = "Vetor de múltiplos: [" + multiplos.join(", ") + "]";
}