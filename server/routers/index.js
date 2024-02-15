const express = require('express')
const ControllerTransaction = require('../controllers/controllerTransaction')
const ControllerGame = require('../controllers/controllerGame')
const ControllerUser = require('../controllers/controllerUser')
const { errorHandler, authentication } = require('../middlewares')

const router = express.Router()

router.get("/", ControllerGame.game)
router.get("/:id", ControllerGame.gameId)
router.get("/game", authentication, ControllerGame.myGame)
router.post("/login", ControllerUser.login)
router.post("/register", ControllerUser.register)
router.post("/login-google", ControllerUser.googleLogin)
router.get("/payment/:id", authentication, ControllerTransaction.InitiateMidTrans)


router.use(errorHandler)

module.exports = router