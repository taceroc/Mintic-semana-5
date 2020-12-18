//se crearon metodos

const router = require('express').Router();
const models = require('../../models');
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');
const auth = require("../../middlewares/auth");


//api/api/auth
router.get('/list',auth.verificarVendedor, userController.list);

// crear usuario
// encripta contraseña
router.post('/register', auth.verificarAdministrador, userController.register);

//controlador: maneja la logica, lo de async().. iria en el controlador
router.post('/signin', userController.login);



module.exports = router;