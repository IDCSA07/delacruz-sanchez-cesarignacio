//creamos la conexion con los servidores que utilizaremos.
/**
 * En este caso utilizamos la variable mysql para que se conecte con nuestra base de datos 
 */
var mysql = require('mysql2');
//la variable readline es para que el usuario pueda ingresar valores, esto con el fin de que se pueda modificar la base de datos 
var readline = require('readline');
/*En esto me adelante un poco y si se lo pregunta si la instalacion de la documentacion de cli-table3 la saque de chatgpt*/
//bueno explicado esto, cli_table3 hace referencia a una libreria que nos permite hacer que el codigo que se muestra al consultar los datos de la base de datos
var Table = require('cli-table3');

//Creamos la conexion con la base de datos 
var conexion = mysql.createConnection({
    //Damos una pequeña referencia a un localhost que va a estar conectado a la red, la cual podemos acceder desde nuestro navegador.
    host: 'localhost',
    //en este punto damos el nombre de la base de datos a utilizar
    database: 'alumnos4IV7',
    //que usuario utilizaremos en este caso es root 
    user: 'root',
    //contrasela de mysql workbench porque sin ella petamos y tenemos que reiniciar workbench desde cero xd
    password: 'Ccrj1108231407&'
});

//ahora haremos la conexion de una funcion llamada "error".
conexion.connect(function(error) {
    if (error) {
        //este si es si manda un error que no se pudo conectar la base de datos manda este mensaje 
        console.log('Solo juguito contigo');
        throw error;
    } else {
        //en este caso que si se conecta la base de dats manda un mensaje de si se conecto 
        console.log('Si connected');
    }
});
//esto ignorelo porque aun no lo vemos me adelante un poco porque me dio curiosidad
/**Pero aqui creamos una variable rl que manda a leer al usuario, y se crea una interfaz que es para que cree la tabla del codigo */
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Creamos una funcion que es consultar registros
function consultarRegistros() {
    //query que es para seleccionar la tabla registro.      PD:Ponemor la funcion error y respuesta.
    conexion.query('SELECT * FROM registro', function(error, respuesta) {
        if (error) {
            //Aqui es donde esta si no existe la tabla automaticamente va a mandar un error y si es un error va a mandar el siguiente mensaje 
            console.log('No tablita');
            throw error;
        } else {
            //bueno aqui en este caso como le decia me adelante, crea una nueva tabla con la variable tabla....
            var tabla = new Table({
                //Aqui en este caso da nombre a cada columna 
                head: ['Boleta', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'Correo', 'Password'],
                //en este caso le da dimensiones a cada columna para que no se deforme el texto o se vea feo
                colWidths: [10, 20, 20, 20, 30, 10]
            });
            //aqui se da una respuesta que esto es da como resultado el registro de la bd 
            respuesta.forEach(registro => {
                //bueno aqui se ven todos los datos, nombre, boleta (autoincrementable), apppat,apmat, etc
                tabla.push([registro.boleta, registro.nombre, registro.appat, registro.apmat, registro.correo, registro.password]);
            });
            //aqui cierra la tabla y sus dimensiones.
            console.log(tabla.toString());
            //aqui e este punto porque aparece una funcion de mostrar menu, bueno esto es principalmente porque cree un menu el cual me deja editar, borrar, mostrar os datos de la tabla, agregar datos y salir del programa.
            mostrarMenu();
        }
    });
}
//funcion agregar registro, esto sirve para agregar un registro el cual va a hacer lo mismo pero que el usuario ingrese sus datos.
function agregarRegistro(nombre, appat, apmat, correo, password) {
    //aqui manda a la base de datos que ingrese un nuevo nombre appat apmat etc, los signos de interrogacion siven para que los valores dados se ingresen una vez en la base de datos ya que como se ve son nulos, cuando se le pide al usuario ingresar estos datos, se guarda en una nueva fila.
    conexion.query('INSERT INTO registro (nombre, appat, apmat, correo, password) VALUES (?, ?, ?, ?, ?)', [nombre, appat, apmat, correo, password], function(error, respuesta) {
        if (error) {
            //manda este mensaje si hay error 
            console.log('No se pudo insertar');
            throw error;
        } else {
            //este mensaje lo manda como una respuesta de que el codigo se ejecuto correctamente
            console.log('Registro exitoso,', respuesta);
            //muestra menu de nueva cuenta 
            mostrarMenu();
        }
    });
}
//en esta funcion una vez seleccionada la boleta a editar, esto lo que hara sera cambiar los datos anteriores.
function editarRegistro(boleta, nuevoNombre, nuevoAppat, nuevoApmat, nuevoCorreo, nuevoPassword) {
    //Aqui es diferente a la funcion agregar registro porque, esto simplemente es porque en una funcion se agregan datos y en esta como se ve se tienen que cambiar los datos.
    conexion.query('UPDATE registro SET nombre = ?, appat = ?, apmat = ?, correo = ?, password = ? WHERE boleta = ?', [nuevoNombre, nuevoAppat, nuevoApmat, nuevoCorreo, nuevoPassword, boleta], function(error, respuesta) {
        if (error) {
            console.log('No se pudo editar');
            throw error;
        } else {
            console.log('Edición exitosa,', respuesta);
            mostrarMenu();
        }
    });
}
//Aqui lo que hace la funcion automaticamente es borrar la boleta que seria el identificador del alumno, esto porque porque si se se elimina el identificador se borra automaticamente todo lo que esta en esa fila ya que no hay dentificador que lo pueda mantener en ese lugar a los datos registrados.

function borrarRegistro(boleta) {
    conexion.query('DELETE FROM registro WHERE boleta = ?', [boleta], function(error, respuesta) {
        if (error) {
            console.log('No se pudo borrar');
            throw error;
        } else {
            console.log('Borrado exitoso,', respuesta);
            mostrarMenu();
        }
    });
}
//Esta funcion muestra lo que se imprime automaticamente al iniciar el programa, es un menu que muestra las diferentes operaciones que se pueden hacer.
function mostrarMenu() {
    console.log('Selecciona una opción:');
    console.log('1. Consultar registros');
    console.log('2. Agregar registro');
    console.log('3. Editar registro');
    console.log('4. Borrar registro');
    console.log('5. Salir');
    //En este caso genera una Opcion para consultar los registros en casos que uno es el de consultar registros, otro es de agregar registro, editar registro etc etc.
    //Cuando esto pasa automaticamente se regresa al menu principal que es el de mostrar menu, paa que se haga un bucle 
    rl.question('Opción: ', function(opcion) {
        switch (opcion) {
            case '1':
                consultarRegistros();
                break;
            case '2':
                rl.question('Nombre: ', function(nombre) {
                    rl.question('Apellido paterno: ', function(appat) {
                        rl.question('Apellido materno: ', function(apmat) {
                            rl.question('Correo: ', function(correo) {
                                rl.question('Password: ', function(password) {
                                    agregarRegistro(nombre, appat, apmat, correo, password);
                                });
                            });
                        });
                    });
                });
                break;
            case '3':
                rl.question('Boleta del registro a editar: ', function(boleta) {
                    rl.question('Nuevo nombre: ', function(nuevoNombre) {
                        rl.question('Nuevo apellido paterno: ', function(nuevoAppat) {
                            rl.question('Nuevo apellido materno: ', function(nuevoApmat) {
                                rl.question('Nuevo correo: ', function(nuevoCorreo) {
                                    rl.question('Nuevo password: ', function(nuevoPassword) {
                                        editarRegistro(boleta, nuevoNombre, nuevoAppat, nuevoApmat, nuevoCorreo, nuevoPassword);
                                    });
                                });
                            });
                        });
                    });
                });
                break;
            case '4':
                rl.question('Boleta del registro a borrar: ', function(boleta) {
                    borrarRegistro(boleta);
                });
                break;
            case '5':
                //en este caso al salir del programa se finaliza la conexion con la base de datos y se manda el siguiente mensaje.
                console.log('Saliendo del programa...');
                rl.close();
                //aqui cerraria el programa y finalizaria la conexion con la base de datos.
                conexion.end();
                break;
            default:
                //En el caso de que la opcion sea invalida te regresa al menu principal.
                console.log('Opción no válida');
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();