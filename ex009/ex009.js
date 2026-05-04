function unirVetores() {
    let vetor1 = [];
    let vetor2 = [];

    for (let i = 0; i < 3; i++) {
        let num = parseInt(prompt("Digite o número " + (i + 1) + " do vetor 1:"));
        vetor1.push(num);
    }

    for (let i = 0; i < 3; i++) {
        let num = parseInt(prompt("Digite o número " + (i + 1) + " do vetor 2:"));
        vetor2.push(num);
    }

    let uniao = vetor1.concat(vetor2);

    document.getElementById("resultado").innerHTML = "Vetor 1: [" + vetor1.join(", ") + "]<br>" + 
                                                     "Vetor 2: [" + vetor2.join(", ") + "]<br>" +
                                                     "União dos vetores: [" + uniao.join(", ") + "]";
}