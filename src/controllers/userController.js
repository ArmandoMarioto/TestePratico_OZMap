exports.index = 
  async (ctx) =>{
    await ctx.render('cadrastro')
};
exports.cadastro = 
  async (ctx) =>{
    await ctx.body('Oiee')
};