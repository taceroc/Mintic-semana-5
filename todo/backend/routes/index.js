const routerx = require('express-promise-router');
const usuarioRouter = require('./usuario.js');
const categoriaRouter = require('./categoria.js');
const articuloRouter = require('./articulo.js');

const router = routerx();


router.use('/usuario', usuarioRouter);
router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);

module.exports = router;