const express = require("express")
const router = express.Router()
const controller = require("../controller/gamesController.js")
const cors = require("cors")

router.get("/gamesLista", cors(), controller.getGames)
router.get("/gamesLista/:id", cors(), controller.gamesById)
router.put("/gamesLista/:id", cors(), controller.atualizar)
//router.patch("/gamesLista/:id", cors(), controller.gamesUpdate)


module.exports = router