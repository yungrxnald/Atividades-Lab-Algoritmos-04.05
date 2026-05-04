let numeros = [];

    function adicionar() {
        let input = document.getElementById("numero");
        let valor = input.value;

        if (valor === "") {
            alert("Digite um número!");
            return;
        }

        if (numeros.length >= 5) {
            alert("Você já digitou 5 números!");
            return;
        }

        numeros.push(Number(valor));
        input.value = "";
        mostrarOriginal();
    }

    function mostrarOriginal() {
        document.getElementById("original").innerHTML = numeros.join(", ");
    }

    function mostrarInverso() {
        if (numeros.length < 5) {
            alert("Digite 5 números primeiro!");
            return;
        }

        let resultado = "";

        for (let i = numeros.length - 1; i >= 0; i--) {
            resultado += numeros[i] + " ";
        }

        document.getElementById("inverso").innerHTML = resultado;
}