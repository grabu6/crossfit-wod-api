const express = require("express");
const maquinaController = require("../../controllers/maquinaController");
const estocController = require("../../controllers/estocController");

const router = express.Router();

router
  .get("/", maquinaController.getAllMaquines)
  .get("/:maquinaId", maquinaController.getOneMaquina)
  .get("/:maquinaId/estocs", estocController.getAllEstocsDeProducte)
  .get("/:maquinaId/calaixos", maquinaController.getAllCalaixosDeMaquina)

  
module.exports = router;
