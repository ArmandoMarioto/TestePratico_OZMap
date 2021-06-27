const Usuario = require('../models/UserModel');

exports.index = 
  async (ctx) =>{
    await ctx.render('cadrastro',{
      usuario:{}
    })
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
    ctx.redirect(`/cadastro/${usuario.usuario._id}`);
    }
    catch(e){console.log(e);
      await ctx.render('cadrastro');}

};

exports.editIndex = 
  async (ctx) =>{
    if(!ctx.request.params.id)return ;
   
    
   const usuario = await Usuario.buscaPorId(ctx.request.params.id)
   if(!usuario)return;
   console.log(usuario.nome)
    await ctx.render('cadrastro',{usuario})
};

exports.edit = 
  async (ctx) =>{
  try
  {
    if(!ctx.request.params.id)return ;
   
  const usuario = new Usuario(ctx.request);
  await usuario.edit(ctx.request.params.id);

  if(usuario.errors.length > 0) 
  {
    ctx.flash('errors', usuario.errors);
    await ctx.render('index');;
    return;
  }
  //cadastro/${usuario.usuario._id}
  ctx.redirect(`/`);
  }catch(e){console.log(e)
    await ctx.render('cadrastro');}

};

exports.delete = async (ctx) =>
{
  if(!ctx.request.params.id)return ;
   
    
  const usuario = await Usuario.delete(ctx.request.params.id)
  if(!usuario)return;
  console.log(usuario.nome)
  ctx.redirect(`/`);
};