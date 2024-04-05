function myFunction() {
    var x, y, suma, text, texto, comun, porcentaje, sol;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números válidos";
    } else {

        suma = parseFloat(x) + parseFloat(y);
        text = suma;
        texto = ((100 / suma) * parseFloat(y));
        comun = texto;
        porcentaje = ((100 / suma) * parseFloat(x));
        sol = porcentaje;

    }
    document.getElementById("sumando").innerHTML = text;
    document.getElementById("woman").innerHTML = texto;
    document.getElementById("men").innerHTML = sol;
}