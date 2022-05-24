const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userService = require('../database/user');

const login = (req, res) => {
    console.log("login")
    userService.getUser(req.body.login)
    .then((user) => {
        if (!user)
        {
            throw {code: 404, message: "User not found"}
        }
        console.log(user)
        bcrypt.compare(req.body.password, user.password)
        .then((passwordMatches) => {
            if (passwordMatches)
            {
                return res.status(200).send({
                    token: _generateAccessToken(user.login),
                    message: "Succesfully logged in"
                })
            }
            else
            {
                return res.status(401).send({
                    message: "Invalid password"
                })
            }
        })
    })
    .catch((error) => {
        console.error(error)
        let responseCode = 500
        let responseMessage = error.message
        switch (error.code) {
            case 404:
                responseCode = 404
                responseMessage = "User not found"
                break;
        }
        return res.status(responseCode).send({
            message: responseMessage
        })
    })
}

const register = (req, res) => {
    console.log("register")
    let hashedPassword = _generateHashedPassword(req.body.password)
    let newUser = {
        login: req.body.login,
        password: hashedPassword,
        displayName: req.body.displayName
    }
    userService.addUser(newUser)
    .then((user) => {
        console.log(user)
        return res.status(201).send({
            token: _generateAccessToken(user.login),
            message: "Succesfully registered an user"
        })
    })
    .catch((error) => {
        console.error(error)
        let responseCode = 500
        let responseMessage = error.message
        switch (error.code) {
            case 11000:
                responseCode = 406
                responseMessage = "User with this login already exists"
                break;
        }
        return res.status(responseCode).send({
            message: responseMessage
        })
    })
}

const _generateHashedPassword = (plainPassword) => {
    const salt = bcrypt.genSaltSync(5)
    return bcrypt.hashSync(plainPassword, salt)
}

const _generateAccessToken = (login) => {
    return jwt.sign({login: login}, process.env.TOKEN_SECRET, {expiresIn: '1800s'})
}

module.exports = {login, register}