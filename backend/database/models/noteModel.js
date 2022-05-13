const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    creatorId: String,
    viewableBy: [String],
    timeCreated: Date,
    content: String,
    title: String,
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note