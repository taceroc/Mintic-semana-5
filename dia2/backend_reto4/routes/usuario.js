const routerx = require('express-promise-router');
const models = require('../models');
const userController = require('../controllers/UsuarioController.js');
const bcrypt = require('bcryptjs');
const auth = require("../middlewares/auth");

const router = routerx();


//api/api/auth
router.get('/list', userController.list);

// crear usuario
// encripta contraseña
router.post('/register', userController.register);

//controlador: maneja la logica, lo de async().. iria en el controlador
router.post('/login', userController.login);

router.put('/update', userController.update);



module.exports = router;