var express = require('express');
var router = express.Router();

//ruta principal 

router.get('/', function(req, res) {
    res.render('index', { title: 'Ejemplo express' });
});

//ruta se tiene que exportar

module.exports = router;