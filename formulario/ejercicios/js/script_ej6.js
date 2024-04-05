function myFunction() {
    var x, y, suma, text, texto, comun, porcentaje, sol;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir un número válido";
    } else {

        suma = parseFloat(x) - parseFloat(y);
        text = suma;

    }
    document.getElementById("sumando").innerHTML = text;

}