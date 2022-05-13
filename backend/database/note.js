const mongoose = require('mongoose');
const noteModel = require('./models/noteModel');

const addNote = (note, user) => {
    const newNote = new noteModel({
        creatorId: user.login,
        viewableBy: [user.login],
        timeCreated: Date.now(),
        timeUpdated: Date.now(),
        content: note.content,
        title: note.title,
    })
}

const getNote = (noteId) => {
    return noteModel.findOne({_id: noteId}).exec()
}