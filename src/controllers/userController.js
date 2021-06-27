const Usuario = require('../models/UserModel');
exports.index = 
  async (ctx) =>{
    await ctx.render('cadrastro')
};
exports.cadastro = 
  async (ctx) =>{
    const usuario = new Usuario(ctx.body);
    console.log(ctx.body);
    await usuario.register();

    if(usuario.errors.length > 0) {
      ctx.flash('errors', usuario.errors);
      ctx.redirect('back');
      return;
    }
};