exports.paginaInicial = 
  async (ctx) =>{
    await ctx.render('index')
    //ctx.body = `Seu servidor esta rodando em http://localhost:`; //http://localhost:3000/
};