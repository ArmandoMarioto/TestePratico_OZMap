
const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema
({
    nome:{type:String , required: true},
    email:{type:String , required: true},
    idade:{type:Number, required: true},
});

const UsuarioModel = mongoose.model('Usuario', UserSchema);

function Usuario(ctx) 
{
    this.body = ctx.body;
    this.errors = [];
    this.usuario = null;
}

Usuario.prototype.register = async function()
{
    this.valida();
    if(this.errors.length > 0) return;
    this.usuario = await UsuarioModel.create(this.body);
};
  
Usuario.prototype.valida = function() {
    this.cleanUp();
  
    // Validação
    // O e-mail precisa ser válido
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
    
  };
  
Usuario.prototype.cleanUp = function() {
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }
  
    this.body = {
      nome: this.body.nome,
      email: this.body.email,
      idade: this.body.idade,
    };
  };
  
Usuario.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.usuario = await UsuarioModel.findByIdAndUpdate(id, this.body, { new: true });
  };
  
  // Métodos estáticos
  Usuario.buscaPorId = async function(id) {
    if(typeof id !== 'string') return;
    const usuario = await UsuarioModel.findById(id);
    return usuario;
  };
  
  Usuario.buscaUsuarios = async function() {
    const usuarios = await UsuarioModel.find()
      .sort({ nome: -1 });
    return usuarios;
  };
  
  Usuario.delete = async function(id) {
    if(typeof id !== 'string') return;
    const usuario = await UsuarioModel.findOneAndDelete({_id: id});
    return usuario;
  };
  


module.exports = Usuario;