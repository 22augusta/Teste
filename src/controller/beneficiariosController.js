//apontamento do model que criamos para as Dbeneficiarios
const beneficiarios = require('../models/beneficiarios');

const getAll = (req, res) => {
  console.log(req.url);
  beneficiarios.find(function(err, beneficiarios){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(beneficiarios);
  })
};

const getById = (req, res) => {
  const id = req.params.id;
  //Find sempre retorna uma lista
  //FindOne retorna um unico documento
  beneficiarios.find({ id }, function(err, beneficiarios){
    if(err) { 
      res.status(500).send({ message: err.message })
    }

    res.status(200).send(beneficiarios);
  })
};



const postBeneficiario = (req, res) => {
  console.log(req.body)
  
  let beneficiario = new beneficiarios(req.body)

  beneficiario.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(beneficiario.toJSON())
  })
  
};


const deleteBeneficiario = (req, res) => {
  const id = req.params.id;

  //deleteMany remove mais de um registro
  //deleteOne remove apenas um registro
  beneficiarios.find({ id }, function(err, beneficiario){
    if(beneficiario.length > 0){
      beneficiarios.deleteMany({ id }, function(err){
        if(err) { 
          res.status(500).send({ 
            message: err.message, 
            status: "FAIL" 
           })
        }
        res.status(200).send({ 
          message: 'Beneficiario removida com sucesso', 
          status: "SUCCESS" 
        })
      })
    }else{
      res.status(200).send({ 
        message: 'Não há beneficiario para ser removida', 
        status: "EMPTY" 
      })
    }
  })
};


const putBeneficiario = (req, res) => {
  const id = req.params.id;

  beneficiarios.find({ id }, function(err, beneficiario){
    if(beneficiario.length> 0){
      //faz o update apenas para quem respeitar o id passado no parametro
      // set são os valores que serão atualizados
      //UpdateMany atualiza vários registros de uma unica vez
      //UpdateOne atualiza um único registro por vez
      
      beneficiarios.updateMany({ id }, { $set : req.body }, function (err) {
        if (err) {
          res.status(500).send({ message: err.message })
        }
        res.status(200).send({ message: "Registro alterado com sucesso"})
      })
    }else {
      res.status(200).send({ message: "Não há registros para serem atualizados com esse id"})
    }
  })

}

module.exports = {
  getAll,
  getById,
  postBeneficiario,
  deleteBeneficiario,
  putBeneficiario
};


