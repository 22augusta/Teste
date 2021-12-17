const express = require("express");
const router = express.Router();

router.get('/',function(req,res){
    res.status(200).send({
        titulo: "Projeto Precisa - Turma Senac",
        data: "14/12/21" 
    })
})

module.exports = router;
