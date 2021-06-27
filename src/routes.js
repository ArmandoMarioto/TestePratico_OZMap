
const Router = require('koa-router');
const router = new Router();
const koaBody = require('koa-body')();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');

//Rotas da Home

router.get('/', homeController.index);


//Rotas do usuario
router.get('/cadastro', userController.index);
router.post('/cadastro/register',koaBody, userController.cadastro);
router.get('/cadastro/:id',koaBody, userController.editIndex);
router.post('/cadastro/edit/:id',koaBody, userController.edit);
router.get('/cadastro/delete/:id',koaBody, userController.delete);

module.exports = router;