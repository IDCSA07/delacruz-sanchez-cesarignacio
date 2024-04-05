function myFunction() {
    var x, y, suma, text;
    x = document.getElementById("num1").value;
    if (isNaN(x)) {
        text = "Es necesario introducir un número válido";
    } else {
        suma = (parseFloat(x) - (parseFloat(x) * 0.15));
        text = suma;
    }
    document.getElementById("sumando").innerHTML = text;
}