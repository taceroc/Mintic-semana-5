/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();



//api/api/auth
router.get('/list', articuloController.list);

// crear usuario
// encripta contraseña
router.post('/add', articuloController.add);
router.put('/update', articuloController.update);
router.put('/activate', articuloController.activate);
router.put('/deactivate', articuloController.deactivate);
//controlador: maneja la logica, lo de async().. iria en el controlador



module.exports = router;