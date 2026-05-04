let frutas = ["manga", "banana", "laranja", "uva", "melancia"];

function buscar() {
    let input = document.getElementById("fruta").value.toLowerCase();
    let resultado = document.getElementById("resultado");

    let posicao = frutas.indexOf(input);

    if (posicao !== -1) {
        resultado.innerHTML = "Fruta encontrada na posição: " + posicao;
    } else {
        resultado.innerHTML = "Fruta não encontrada.";  
    }
}