const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    creatorId: {type: String, required: true},
    viewableBy: {type: [String], required: true},
    timeCreated: {type: Date, required: true},
    timeUpdated: {type: Date, required: true},
    content: {type: String, required: true},
    title: {type: String, required: true},
    isEncrypted: {type: Boolean, required: true},
    encryptionTest: {type: String, required: false},
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note