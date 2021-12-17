const express = require("express");
const router = express.Router();
const controller = require("../controller/doadorsController");

router.get("/", controller.getAll);

router.get("/doadors", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postDoador);
router.delete("/:id", controller.deleteDoador);
router.put("/:id", controller.putDoador);

module.exports = router;
