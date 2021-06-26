
const Router = require('koa-router');
const router = new Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');

//Rotas da Home

router.get('/', homeController.index);


//Rotas do usuario
router.get('/cadastro', userController.index);
router.get('/cadastro/register', userController.cadastro);

module.exports = router;