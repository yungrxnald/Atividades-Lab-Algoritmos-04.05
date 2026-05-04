let vetor = [10, 20, 30, 40, 50];

function valor() {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}

document.getElementById("resultado").innerHTML = "Vetor: [" + vetor.join(", ") + "]<br>" + "Soma total: " + soma;
}