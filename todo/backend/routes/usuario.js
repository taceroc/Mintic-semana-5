const routerx = require('express-promise-router');
const models = require('../models');
const userController = require('../controllers/UsuarioController.js');
const bcrypt = require('bcryptjs');
const auth = require("../middlewares/auth");

const router = routerx();


//api/api/auth
router.get('/list',auth.verifyAdmin, userController.list);

// crear usuario
// encripta contraseña
router.post('/add',auth.verifyAdmin, userController.add);

//controlador: maneja la logica, lo de async().. iria en el controlador
router.post('/login', userController.login);

router.put('/update',auth.verifyAdmin, userController.update);
router.put('/activate',auth.verifyAdmin, userController.activate);
router.put('/deactivate',auth.verifyAdmin, userController.deactivate);


router.post('/addvisit', userController.addvisit);


module.exports = router;