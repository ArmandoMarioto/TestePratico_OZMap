//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const Koa = require('koa');
const render = require('koa-ejs');
const koa = new Koa();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://armando:guX650MqmqjJHjHS@armandocluster.6brbe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {

  })
  .catch(e => console.log(e));

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