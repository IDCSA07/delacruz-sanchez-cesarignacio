/*
Javascript es un lenguaje de programacion multi paradigma 
Acepta programacion funcioan, estructurada,POO, eventos
Dentro JS no exite int, dobule, float, string, etc
Para el manejo de variables de tipo de dato exite el estandar E56 el cual nos dice que 
para el manejo de variables tenemos:

VAR LET CONST

*/

/*Vamos hacer una funcion para comprobar que el campo de nombre 
sea mayor a 3 caracteres*/

function validar() {
    if (formulario.nombre.value.length < 4) {
        alert("Porfavor escribe mas de 3 cacarteres en el nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "1234567890";

    var checkStr = formulario.nombre.value;

    alert(checkStr);

    var allValido = true;
    /**
     * vamos a hacer un bucle mediante el cual primero
     * obtenga la cadena del nobre y la separa en caracteres, una vez que tenga cada caratcer debo de comprarlo con 
     * la cadena que en este momento estoy considerando como la verdad absoluta y si despues de recorrer toda la cadena encuentro
     * que el caracter no se encuentra envie un error 
     */
    for (var i = 0; i < checkStr.length; i++) {
        var caracteres = checkStr.ChartAt(i);
        for (var j = 0; j < abcOK.length; j++) {
            if (caracteres == abcOK.charAt(j)) {
                break;
            }
        }
        if (j == abcOK.length) {
            allValido = false;
            break;
        }
    }
    if (!allValido) {
        alert("Escriba unicamente numeros en el campo de edad")
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var checkStr = formulario.nombre.value;

    alert(checkStr);

    var allValido = true;
    /**
     * vamos a hacer un bucle mediante el cual primero
     * obtenga la cadena del nobre y la separa en caracteres, una vez que tenga cada caratcer debo de comprarlo con 
     * la cadena que en este momento estoy considerando como la verdad absoluta y si despues de recorrer toda la cadena encuentro
     * que el caracter no se encuentra envie un error 
     */
    for (var i = 0; i < checkStr.length; i++) {
        var caracteres = checkStr.ChartAt(i);
        for (var j = 0; j < abcOK.length; j++) {
            if (caracteres == abcOK.charAt(j)) {
                break;
            }
        }
        if (j == abcOK.length) {
            allValido = false;
            break;
        }
    }
    if (!allValido) {
        alert("Escriba unicamente letras en el campo de nombre")
        formulario.nombre.focus();
        return false;
    }
    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    var txt = formulario.correro.value;

    alert("Email " + (b.test(txt) ? "" : "no") + " valido");

    return b.test;
}
/**funcion para validar cuando el correo es necesario contar con una expresion regular 
 * porque tenemos un formato el cual es 
 * 
 */