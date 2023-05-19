function nParImpar() {

    let numero = document.getElementById("nDigitado").value;
    numero = parseInt(numero);
    if (numero % 2 == 1) {

        alert("O número digitado é impar")


    } else {
        alert("O número digitado é par")
    }
}


function contas() {
    let n1 = document.getElementById("nDigitado1").value

    let n2 = document.getElementById("nDigitado2").value
    let operadores = document.getElementById("operadores").value
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    switch (operadores) {
        case "+":
            n1 + n2
            total = n1 + n2
            alert("A soma de " + n1 + " + " + n2 + " é " + total)
            break;
        case "-":
            n1 - n2
            total = n1 - n2
            alert("O resto de " + n1 + " - " + n2 + " é " + total)
            break;
        case "*":
            n1 * n2
            total = n1 * n2
            alert("O produto de " + n1 + " * " + n2 + " é " + total)
            break;
        case "/":
            n1 / n2
            total = n1 / n2
            if (n2 == 0) {
                alert("Não é possível dividr um número por 0")
            } else {
                alert("O produto de " + n1 + " / " + n2 + " é " + total)
            }


        default:
            break;
    }
}