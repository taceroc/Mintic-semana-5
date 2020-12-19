const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController.js');
const auth = require("../middlewares/auth");

const router = routerx();

//api/api/auth
router.get('/list', categoriaController.list);

// crear usuario
// encripta contraseña
router.post('/add', categoriaController.add);
router.put('/update', categoriaController.update);
router.put('/activate', categoriaController.activate);
router.put('/deactivate', categoriaController.deactivate);
//controlador: maneja la logica, lo de async().. iria en el controlador



module.exports = router;