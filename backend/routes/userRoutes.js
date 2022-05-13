const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController');

userRouter.use((req, res, next) => {
    console.log("---USER DEBUG ---")
    console.log(req)
    console.log(res)
    console.log("---USER DEBUG ---")
    next()
})

userRouter.get('/:user_id', userController.get_user_info)

module.exports = userRouter