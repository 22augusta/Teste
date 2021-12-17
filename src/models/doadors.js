const mongoose = require('mongoose');

//estrutura do seu model (atributos da sua entidade)
const doadorsSchema = new mongoose.Schema({
    id: {type: Number},
    Nome: {type: String},
    CpfCnpj: {type: Number},
    Telefone: {type: Number}
},{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const doadors = mongoose.model('doadors', doadorsSchema);

// exportar o model para ser utilizado
module.exports = doadors;
    

    
