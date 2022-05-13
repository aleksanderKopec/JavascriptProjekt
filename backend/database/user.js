const mongoose = require('mongoose');
const userModel = require('./models/userModel');

const addUser = (user) => {
    const newUser = new userModel({
        login: user.login,
        password: user.password,
        displayName: user.displayName,
    })
    return newUser.save()
}

const getUser = (login) => {
    return userModel.findOne({login: login}).exec()
}

const editUser = (user) => {
    return userModel.findOne({login: user.login}).exec()
    .then((foundUser) => {
        foundUser.password = user.password
        foundUser.displayName = user.displayName
        return foundUser.save() 
    })
}

const deleteUser = (user) => {
    return userModel.findOneAndDelete({login: user.login}).exec()
}

module.exports = { addUser, getUser, editUser, deleteUser}