const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController.js');
const auth = require("../middlewares/auth");

const router = routerx();

//api/api/auth
router.get('/list',auth.verifyAlmacenero, categoriaController.list);

// crear usuario
// encripta contraseña
router.post('/add',auth.verifyAlmacenero, categoriaController.add);
router.put('/update',auth.verifyAlmacenero, categoriaController.update);
router.put('/activate',auth.verifyAlmacenero, categoriaController.activate);
router.put('/deactivate',auth.verifyAlmacenero, categoriaController.deactivate);
//controlador: maneja la logica, lo de async().. iria en el controlador



module.exports = router;