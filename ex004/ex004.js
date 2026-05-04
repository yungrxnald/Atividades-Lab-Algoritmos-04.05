function gerar() {
    let numeros = [];
    let pares = [];

    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 101);
        numeros.push(num);
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    document.getElementById("numeros").innerHTML = "Números gerados: " + numeros.join(", ");
    document.getElementById("pares").innerHTML = "Números pares: " + pares.join(", ");
}