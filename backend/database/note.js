const mongoose = require('mongoose');
const noteModel = require('./models/noteModel');

const addNote = (note, login) => {
    return noteModel.create({
        creatorId: login,
        viewableBy: [login],
        timeCreated: Date.now(),
        timeUpdated: Date.now(),
        content: note.content,
        title: note.title,
        isEncrypted: note.isEncrypted,
        encryptionTest: note.encryptionTest
    })
}

const getNote = (noteId) => {
    return noteModel.findOne({_id: noteId}).exec()
}

const getUserNotes = (userLogin) => {
    console.log("userLogin: ", userLogin)
    return noteModel.find({creatorId: userLogin}).exec()
}

const editNote = (note) => {
    return noteModel.findOneAndUpdate(
        {
            _id: note._id
        },
        {
            content: note.content,
            title: note.title,
            viewableBy: note.viewableBy,
            isEncrypted: note.isEncrypted,
        } 
    ).exec()
}

const deleteNote = (_id) => {
    return noteModel.findOneAndDelete({_id: _id}).exec()
}

module.exports = { addNote, getNote, getUserNotes, editNote, deleteNote}