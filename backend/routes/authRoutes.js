const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/authController');

authRouter.use((req, res, next) => {
    console.log("---AUTH DEBUG ---")
    console.log(req)
    console.log(res)
    console.log("---AUTH DEBUG ---")
    next()
})

authRouter.post('/login', authController.login)
authRouter.post('/register', authController.register)

module.exports = authRouter