const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    creatorId: String,
    viewableBy: [String],
    dateCreated: Date,
    content: String,
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note