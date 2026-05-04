let amigos = [];

let resultado = document.getElementById("resultado");

function mostrarAmigos() {
    resultado.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        resultado.innerHTML += amigos[i] + "<br>";
    }
}

function adicionar() {
    let nomeInput = document.getElementById("nome");
    let novoNome = nomeInput.value;

    if (amigos.length >= 5) {
        alert("Limite de 5 amigos atingido! Não é possível adicionar mais.");
        return;
    }

    if (novoNome.trim() !== "") {
        amigos.push(novoNome);
        nomeInput.value = "";
        mostrarAmigos();
    } else {
        alert("Por favor, digite um nome válido.");
    }
}
