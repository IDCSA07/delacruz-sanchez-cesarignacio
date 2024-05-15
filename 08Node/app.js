//vamos a crear nuestro propio servidor 

var http = require(`http`);

//todo servidor debe poder atender peticiones y debe de generar respuestas, por lo tanto nuestra funcion debe tener dos parametrso request, response

var servidor = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type ': ' text/html;charset=utf-8' });
    response.write('<h2>De la Cruz Sanchez Cesar Ignacio</h2>');
    console.log('Se hizo una peticion web');
    response.end();

});


servidor.listen(3000);

console.log('Ejecutano el servidor en puerto 3000')