
const Router = require('koa-router');
const router = new Router();
const homeController = require('./controllers/homeController');

//Rotas da Home

router.get('/', homeController.paginaInicial);

module.exports = router;