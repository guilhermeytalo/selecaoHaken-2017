var express = require('express');
var router = express.Router();

// Abre pagina principal.
router.get('/', function(req, res, next) {
  res.render('index', {
    usuario: 'Vitor'
  });
});

module.exports = router;
