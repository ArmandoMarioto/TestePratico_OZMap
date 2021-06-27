const Usuario = require('../models/UserModel');

exports.index = 
  async (ctx) =>{
    const usuarios = await Usuario.buscaUsuarios();
    await ctx.render('index',{usuarios})
    //ctx.body = `Seu servidor esta rodando em http://localhost:`; //http://localhost:3000/
};