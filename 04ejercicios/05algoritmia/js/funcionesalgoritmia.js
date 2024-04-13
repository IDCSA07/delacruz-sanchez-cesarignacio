function problema1() {

    var p1_input = document.querySelector('#p1-input').value;

    var p1_array = p1_input.split(' ').reverse();

    var p1_res = '';


    p1_array.forEach(function(palabra, i) {
        if (i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;

}




function problema2() {

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    /*
    para encontrar el minimo producto escalar entre 2 vectores,
    tenemos que realizar las operaciones correspondientes que son
    con el maximo valor de un vector por el minimo valor del otro
    vector
    
    */


    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];


    v1 = v1.sort(function(a, b) {
        return b - a;
    });

    v2 = v2.sort(function(a, b) {
        return b - a;
    });


    v2 = v2.reverse();


    var p2_producto = 0;

    for (var i = 0; i < v1.length; i++) {
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent =
        'Producto escalar minimo : ' + p2_producto;
}

function problema3() {
    const input = document.getElementById("p3-input").value;

    // Verificar si se ingresaron letras que no son mayúsculas
    const letrasMayusculas = /^[A-Z,]+$/;
    if (!letrasMayusculas.test(input)) {
        const alerta = document.createElement("div");
        alerta.textContent = "Por favor, ingresa solo letras mayúsculas y separadas por comas.";
        alerta.style.color = "red";
        alerta.style.marginTop = "10px";
        document.getElementById("p3-output").appendChild(alerta);
        return;
    }

    // Limpiar la alerta si no hay errores
    document.getElementById("p3-output").textContent = "";

    const palabras = input.split(",");
    let maxCaracteresUnicos = 0;
    let palabraMax = "";
    let caracteresUnicosMax = [];

    palabras.forEach(palabra => {
        // Convertir la palabra a mayúsculas y eliminar caracteres no alfabéticos
        const palabraMayusculas = palabra.replace(/[^A-Z]/g, "").toUpperCase();
        const caracteresUnicos = [...new Set(palabraMayusculas)].join(', ');
        if (caracteresUnicos.length > maxCaracteresUnicos) {
            maxCaracteresUnicos = caracteresUnicos.length;
            palabraMax = palabraMayusculas;
            caracteresUnicosMax = caracteresUnicos;
        }
    });

    document.getElementById("p3-output").textContent = `La palabra con más caracteres únicos es: ${palabraMax}. Número de caracteres únicos: ${maxCaracteresUnicos}. Caracteres únicos: ${caracteresUnicosMax}`;
}