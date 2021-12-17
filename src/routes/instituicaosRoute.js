
const { Router } = require('express');
const express = require("express")
const router = express.Router()
const controller = require("../controller/instituicaosController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
///router.get("/:Bairro", controller.getInstituicaoBairro)
router.post("/", controller.postInstituicao)
router.delete("/:id", controller.deleteInstituicao)
router.put("/:id", controller.putInstituicao)

module.exports = router;
