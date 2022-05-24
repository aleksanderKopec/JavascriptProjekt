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
    })
}

const getNote = (noteId) => {
    return noteModel.findOne({_id: noteId}).exec()
}

const getUserNotes = (userLogin) => {
    return noteModel.find({login: userLogin}).exec()
}

const editNote = (note) => {
    return noteModel.findOneAndUpdate(
        {
            _id: note._id
        },
        {
            content: note.content,
            title: note.title,
            viewableBy: note.viewableBy
        } 
    ).exec()
}

const deleteNote = (note) => {
    return noteModel.findOneAndDelete({_id: note._id}).exec()
}

module.exports = { addNote, getNote, getUserNotes, editNote, deleteNote}