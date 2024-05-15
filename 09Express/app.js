//primero tenems que importar las librerias 
var express = require('express');

//tenermos que realizar una instancia del objeto para poder hacer uso de express

var app = express();
//para node tenermos que utilizar rutas de acceso a por medio de los metodos, get, push, pust, delete

app.get('/', function(req, res) {
    //debemos generar una respuesta del sitio
    res.send('Ruta de Inicio');
});

//levantamos el servidor 
app.listen(3000, function(req, res) {
    console.log('Servidor inicializado en el puerto 3000');
});