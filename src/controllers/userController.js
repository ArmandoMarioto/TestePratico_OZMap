const Usuario = require('../models/UserModel');

exports.index = 
  async (ctx) =>{
    await ctx.render('cadrastro')
};
exports.cadastro = 
  async (ctx) =>{
    try
    {
    const usuario = new Usuario(ctx.request);
    await usuario.register();

    if(usuario.errors.length > 0) 
    {
      ctx.flash('errors', usuario.errors);
      await ctx.render('index');;
      return;
    }
    }
    catch(e){console.log(e);
      await ctx.render('cadrastro');}

};