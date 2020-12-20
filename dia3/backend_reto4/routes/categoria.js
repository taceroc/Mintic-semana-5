const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController.js');
const auth = require("../middlewares/auth");

const router = routerx();

//api/api/auth
router.get('/list', auth.verifyTodos,categoriaController.list);

// crear usuario
// encripta contraseña
router.post('/add', auth.verifyTodos,categoriaController.add);
router.put('/update', auth.verifyTodos,categoriaController.update);
router.put('/activate',auth.verifyTodos, categoriaController.activate);
router.put('/deactivate',auth.verifyTodos, categoriaController.deactivate);
//controlador: maneja la logica, lo de async().. iria en el controlador



module.exports = router;