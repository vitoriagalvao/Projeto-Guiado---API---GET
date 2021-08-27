const express = require("express")
const router = express.Router()
const controller = require("../controllers/seriescontroller")

router.get("/", controller.home)
router.get("/todos", controller.getAll)
router.get("/titulo", controller.getByTtitle)
router.get("/genero", controller.getByGenre)
router.get("/:id", controller.getById)



module.exports = router