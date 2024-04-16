/*Java script maneja variables del sig modo:
var -> variable de accesao local que cualquiera puede hacer uso de ella 
let -> es una variable "protegida" solo se puede hacer uso dentro de la funcion  una variable local mas no global
const -> es una constante significa que su valor no puede cambiar 

var x = "habia una vez";
let x = "hola";

if(true){
    
    //es independiente
}
console.log(x);
*/

// quiero desarrollar una funcion de suma
/*function suma(n1,n2){
    return n1+n2;
}

console.log(Esta es la suma: ${suma(4,5)});

//funciones flecha, las funciones flechas nos ayudan a poder realizar opearaciones de forma mas sencilla y su estructura es la sig.
// "cadena" -> id,clase,nombre,atributo

const sumarFlecha = (n1,n2) => n1+n2;
console.log(Esta es la suma: ${sumarFlecha(10,5)});*/

const razasDePerros = [
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Betoven",
    "Belgua",
    "Dalmata",
    "Pitbull",
    "San Bernardo"
];

//Queresmos recorrerlo e imprimirlo

/*for(let i = 0; i < razasDePerros.length; i ++)
{
    console.log(razasDePerros[i]);
}*/

/*for(const raza of razasDePerros){
    console.log(raza);
}*/

/*for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}

for(const indice in razasDePerros){
    console.log(razasDePerros);
}*/

//forEach itera sobre los elementos del arreglo y no devuelve nada
//todo los forEach son funciones flecha por defecto 
//razasDePerros.forEach((raza,indice,razasDePerros) => console.log(raza));
// la estructura general del forEach
//argumento.forEach((raza,indice,arregloOriginal) => lo que quiero que haga)

//Funcion MAP
// itera sobre los elementos del arreglo y regresa un arreglo diferente con el cual podemos jugar

//const razasDePerrosEnMayusculas = razasDePerros.map((raza) => console.log(raza.toUpperCase()));

//FIND
//Nos permite realizar una busqueda de un elemento dentro del arreglo, si lo encuentra, lo retorna sino lanza un "undefinend"

// por ejemplo yo quiero buscar dentro del arreglo si existe la raza chihuahua

/*if(razasDePerros.find((raza) => raza === "Chihuahua")){
    console.log("La raza se encuentra dentro del arreglo");
    console.log(razasDePerros);
}else{
    //hay que meterlo
    razasDePerros.push("Chihuahua");
    console.log(razasDePerros);
}*/

//FINDINDEX
//Es muy similar al anterior realiza una busqueda del elemento pero en lugar de regresar el elemento regresa su indice, sino lo encuentra nos devuelve un -1 esta funcion es particularmente util en elementos que necesitamos modificar de un arreglo original. dentro de una copia

const indiceChihuahua = razasDePerros.findIndex((raza) => raza === "Chihuahua");

if (indiceChihuahua > -1) {
    console.log(razasDePerros[indiceChihuahua]);
    razasDePerros[indiceChihuahua] += "(Es una raza de perro chiquita y escandalosa, como algunos alumnos escandalosos)";
    console.log(razasDePerros[indiceChihuahua]);
    console.log(razasDePerros);
}
//como examen de segundo parcial
/* 
opcion 1 sudoku de 6 tableros 
ocpion 2 gato de gatos
opcion 3 scrable
opcion 4 piedra papel, lagarto, spock
ocpion 5 smash de peleas con 4 personajes minimos
opciones 6 de una combinacion de 3 juegos*/