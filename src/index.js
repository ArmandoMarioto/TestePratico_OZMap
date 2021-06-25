//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables

const PORT = process.env.PORT || 3000;

const Koa = require('koa');
const render = require('koa-ejs');
const koa = new Koa();

const routes = require('./routes');
const path = require('path');

render(koa, {
  root: path.join(__dirname, 'views'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: true
});
koa
  .use(routes.routes())
  .use(routes.allowedMethods());

const server = koa.listen(PORT);

module.exports = server;