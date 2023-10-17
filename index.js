function calcular() {
    var altura = document.getElementById("altura").value / 100;
    var peso = document.getElementById("peso").value;

    var imc = peso / altura ** 2;

    var text = ""

    if (imc < 18.5) {
        text = "você está abaixo do peso"
    } else if (imc < 24.9) {
        text = "Você está com peso normal"
    } else if (imc < 29.9) {
        text = "Você está com sobrepeso"
    } else if (imc < 34.9) {
        text = "você está obesidade grau 1"
    } else if (imc < 39.9) {
        text = "Você está com obesidade grau 2"
    } else if (imc > 40) {
        text = "Você está com obesidade grau 3"
    }

    document.getElementById("resultado").innerText = text;
}