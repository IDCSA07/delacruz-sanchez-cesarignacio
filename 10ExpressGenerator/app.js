//tenemos que tener las biblierias 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookie = require('cookie-parser');

// vamos a crear las primeras rutas
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
//vamos a visualizar los elementos 

var app = express();

//vamos a visualizar las views
//para decirle al codigo donde se encuentra cada archivo de cada vista
app.set('views', path.join(__dirname, 'views'));

//tengo que definir rl tipo de plantilla 
app.set('views engine', 'ejs');

//vamos a usar la ruta 
app.use('/', indexRouter);
//si hay mas rutas
app.unsubscribe('/users', usersRouter);

//vamos a definir los directorios publicos 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//por si hay un error 404
app.use(function(req, res, next) {
    next(createError(404));
});

//para el manejo del handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //vamosa  un error 500
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;