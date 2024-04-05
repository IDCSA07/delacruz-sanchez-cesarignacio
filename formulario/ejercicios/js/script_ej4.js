function myFunction() {
    var x, y, z, w, e, suma, com, sol, text, locanci, texto, calificacion;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    z = document.getElementById("num3").value;
    w = document.getElementById("num4").value;
    e = document.getElementById("num5").value;
    if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(w) || isNaN(e)) {
        text = "Es necesarios introducir 5 números válidos";
    } else {

        suma = ((55 / 30) * (parseFloat(x) + parseFloat(y) + parseFloat(z)));
        text = suma;
        com = ((30 / 10) * (parseFloat(w)));
        locanci = com;
        sol = ((15 / 10) * (parseFloat(e)));
        texto = sol;
        calificacion = suma + com + sol;
    }
    document.getElementById("parciales").innerHTML = text;
    document.getElementById("examen").innerHTML = locanci;
    document.getElementById("trabajo").innerHTML = texto;
    document.getElementById("calificacion").innerHTML = calificacion;
}