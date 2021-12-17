const mongoose = require('mongoose')

const instituicaosSchema = new mongoose.Schema({
        id:{type: Number},
        Nome:{type: String},
        CpfCnpj:{type: Number},
        Estado: {type: String},
        Cidade:{type: String},
        Bairro:{type: String},
        Endereçodearrecadacao:{type: String}
    },
    
    {
        versionKey:false
    });

    const instituicaos  = mongoose.model('instituicaos', instituicaosSchema);

    module.exports = instituicaos;
