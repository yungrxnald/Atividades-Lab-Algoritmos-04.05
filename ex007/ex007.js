function calcular() {
    let notas = [];
    let soma = 0

    for (let i = 0; i < 5; i++) {
        let nota = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));
        notas.push(nota);
        soma += nota;
    }

    let media = soma / 5;

    let acimaMedia = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > media) {
            acimaMedia++;
        }
    }


    document.getElementById("resultado").innerHTML = 
    "Média da Turma: " + media.toFixed(2) + "<br>" +
    "Alunos acima da média: " + acimaMedia;
}