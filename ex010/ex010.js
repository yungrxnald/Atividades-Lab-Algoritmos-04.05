function remover() {
    let vetorOriginal = [];
    let vetorSemRepetidos = [];

    for (let i = 0; i < 8; i++) {
        let num = parseInt(prompt("Digite o número " + (i + 1) + ":"));
        vetorOriginal.push(num);
    }


    for (let i = 0; i < vetorOriginal.length; i++) {
        let elemento = vetorOriginal[i];

        if (!vetorSemRepetidos.includes(elemento)) {
            vetorSemRepetidos.push(elemento);
        }
    }

    document.getElementById("resultado").innerHTML = "Vetor original: [" + vetorOriginal.join(", ") + "]<br>" +
                                                     "Vetor sem repetições: [" + vetorSemRepetidos.join(", ") + "]";
}