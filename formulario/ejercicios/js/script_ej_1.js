function myFunction() {
    var x, y, suma, text;
    x = document.getElementById("num1").value;
    if (isNaN(x)) {
        text = "Es necesario introducir un número válido";
    } else {

        suma = ((parseFloat(x) / 100) * 2) + parseFloat(x);
        text = suma;
    }
    document.getElementById("sumando").innerHTML = text;
}