let numeros = [];
let lista = document.getElementById("lista");
let resultado = document.getElementById("resultado");

function mostrarLista() {
    lista.innerHTML = "";

    for (let i = 0; i < numeros.length; i++) {
        lista.innerHTML += numeros[i] + "<br>";
    }
}

function adicionar() {
    let input = document.getElementById("numero");
    let valor = input.value;

    if (numeros.length >= 5) {
        alert("Limite de 5 números atingido.");
        return;
    }

    if (valor !== "") {
        numeros.push(parseInt(valor));
        input.value = "";
        mostrarLista();
    } else {
        alert("Por favor, insira um número.");
    }
}

function verificar() {
    if (numeros.length < 5) {
        alert("Digite os 5 números antes de verificar.");
        return;
    }

    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    resultado.innerHTML = "Maior número: " + maior + "<br>"
                        + "Menor número: " + menor;
}
