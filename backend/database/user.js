const mongoose = require('mongoose');
const userModel = require('./models/userModel');

const addUser = (user) => {
    return userModel.create({
        login: user.login,
        password: user.password,
        displayName: user.displayName,
    })
}

const getUser = (login) => {
    return userModel.findOne({login: login}).exec()
}

const editUser = (user) => {
    return userModel.findOneAndUpdate(
        {
            login: user.login
        },
        {
            displayName: user.displayName
        } 
    ).exec()
}

const deleteUser = (user) => {
    return userModel.findOneAndDelete({login: user.login}).exec()
}

module.exports = { addUser, getUser, editUser, deleteUser}