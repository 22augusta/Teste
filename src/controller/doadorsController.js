//apontamento do model que criamos para as Doadors
const doadors = require('../models/doadors');

const getAll = (req, res) => {
  console.log(req.url);
  doadors.find(function(err, doadors){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(doadors);
  })
};

const getById = (req, res) => {
  const id = req.params.id;
  //Find sempre retorna uma lista
  //FindOne retorna um unico documento
  doadors.find({ id }, function(err, doadors){
    if(err) { 
      res.status(500).send({ message: err.message })
    }

    res.status(200).send(doadors);
  })
};



const postDoador = (req, res) => {
  console.log(req.body)
  
  let doador = new doadors(req.body)

  doador.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(doador.toJSON())
  })
  
};


const deleteDoador = (req, res) => {
  const id = req.params.id;

  //deleteMany remove mais de um registro
  //deleteOne remove apenas um registro
  doadors.find({ id }, function(err, doador){
    if(doador.length > 0){
      doadors.deleteMany({ id }, function(err){
        if(err) { 
          res.status(500).send({ 
            message: err.message, 
            status: "FAIL" 
           })
        }
        res.status(200).send({ 
          message: 'Doador removida com sucesso', 
          status: "SUCCESS" 
        })
      })
    }else{
      res.status(200).send({ 
        message: 'Não há doador para ser removida', 
        status: "EMPTY" 
      })
    }
  })
};


const putDoador = (req, res) => {
  const id = req.params.id;

  doadors.find({ id }, function(err, doador){
    if(doador.length> 0){
      //faz o update apenas para quem respeitar o id passado no parametro
      // set são os valores que serão atualizados
      //UpdateMany atualiza vários registros de uma unica vez
      //UpdateOne atualiza um único registro por vez
      
      doadors.updateMany({ id }, { $set : req.body }, function (err) {
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
  postDoador,
  deleteDoador,
  putDoador
};
