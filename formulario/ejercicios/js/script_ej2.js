 function myFunction() {
     var x, y, z, suma, com, sol, text, locanci, texto;
     x = document.getElementById("num1").value;
     y = document.getElementById("num2").value;
     z = document.getElementById("num3").value;
     if (isNaN(x) || isNaN(y) || isNaN(z)) {
         text = "Es necesarios introducir tres números válidos";
     } else {

         suma = (parseFloat(x) + parseFloat(y) + parseFloat(z));
         text = suma;
         com = ((parseFloat(x) * 0.10) + (parseFloat(y) * 0.10) + (parseFloat(z) * 0.10));
         locanci = com;
         sol = com + suma;
         texto = sol;
     }
     document.getElementById("sumando").innerHTML = text;
     document.getElementById("comision").innerHTML = locanci;
     document.getElementById("total").innerHTML = texto;
 }