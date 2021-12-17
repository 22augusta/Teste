//apontamento do model que criamos para as Doadors
const instituicaos = require('../models/instituicaos');

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
  instituicaos.find({ id }, function(err, doadorinstituicaos){
    if(err) { 
      res.status(500).send({ message: err.message })
    }

    res.status(200).send(instituicaos);
  })
};



const postInstituicao = (req, res) => {
  console.log(req.body)
  
  let instituicao = new instituicaos(req.body)

  instituicao.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(doador.toJSON())
  })
  
};


const deleteInstituicao = (req, res) => {
  const id = req.params.id;

  //deleteMany remove mais de um registro
  //deleteOne remove apenas um registro
  instituicaos.find({ id }, function(err, instituicao){
    if(instituicao.length > 0){
      instituicaos.deleteMany({ id }, function(err){
        if(err) { 
          res.status(500).send({ 
            message: err.message, 
            status: "FAIL" 
           })
        }
        res.status(200).send({ 
          message: 'Instituicao removida com sucesso', 
          status: "SUCCESS" 
        })
      })
    }else{
      res.status(200).send({ 
        message: 'Não há instituicao para ser removida', 
        status: "EMPTY" 
      })
    }
  })
};


const putInstituicao = (req, res) => {
  const id = req.params.id;

  instituicaos.find({ id }, function(err, instituicao){
    if(instituicao.length> 0){
      //faz o update apenas para quem respeitar o id passado no parametro
      // set são os valores que serão atualizados
      //UpdateMany atualiza vários registros de uma unica vez
      //UpdateOne atualiza um único registro por vez
      
      instituicaos.updateMany({ id }, { $set : req.body }, function (err) {
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
  postInstituicao,
  deleteInstituicao,
  putInstituicao
};

