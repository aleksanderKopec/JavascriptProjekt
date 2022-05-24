const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController');

userRouter.use((req, res, next) => {
    console.log("---USER DEBUG ---")
    console.log("Request body: ", req.body)
    // console.log(res)
    console.log("---USER DEBUG ---")
    next()
})

userRouter.get('/:userId', userController.get_user_info)

module.exports = userRouter