const { Router } = require('express');
const express = require("express")
const router = express.Router()
const controller = require("../controller/beneficiariosController")

router.post("/", controller.postBeneficiario)
router.delete("/:id", controller.deleteBeneficiario)
router.put("/:id", controller.putBeneficiario)

module.exports = router;
