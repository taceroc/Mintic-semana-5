/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();



//api/api/auth
router.get('/list',auth.verifyTodos, articuloController.list);

// crear usuario
// encripta contraseña
router.post('/add', auth.verifyTodos, articuloController.add);
router.put('/update', auth.verifyTodos, articuloController.update);
router.put('/activate', auth.verifyTodos, articuloController.activate);
router.put('/deactivate',auth.verifyTodos, articuloController.deactivate);
//controlador: maneja la logica, lo de async().. iria en el controlador



module.exports = router;