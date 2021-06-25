
const Router = require('koa-router');
const router = new Router();
const homeController = require('./controllers/homeController');

router.get('/', homeController.paginaInicial);

module.exports = router;