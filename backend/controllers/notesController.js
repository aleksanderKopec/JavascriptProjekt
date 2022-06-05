const noteService = require('../database/note');

const get_notes = (req, res) => {
    noteService.getUserNotes(req.params.userId)
    .then((userNotes) => {
        return res.status(200).send({
            message: "Fetched user notes",
            notes: userNotes
        })
    })
    .catch((error) => {
        console.error(error)
        return res.status(500).send({
            message: error.message,
        })
    })
}

const get_note = (req, res) => {
    noteService.getNote(req.params.noteId)
    .then((note) => {
        return res.status(200).send({
            message: "Fetched note",
            note: note
        })
    })
    .catch((error) => {
        console.error(error)
        return res.status(500).send({
            message: error.message,
        })
    })
}

const create_note = (req, res) => {
    noteService.addNote(req.body.note, req.body.login)
    .then((note) => {
        return res.status(201).send({
            message: "Succesfully created a note",
            note: note
        })
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send({
            message: error.message
        })
    })
}

const edit_note =  (req, res) => {
    noteService.editNote(req.body.note)
    .then((note) => {
        return res.status(200).send({
            message: "Succesfully edited a note",
            note: note
        })
    })
    .catch((error) => {
        console.error(error)
        return res.status(500).send({
            message: error.message
        })
    })
}

const delete_note = (req, res) => {
    console.log("Deleting id:", req.params.noteId)
    noteService.deleteNote(req.params.noteId)
    .then((note) => {
        return res.status(204).send({
            message: "Succesfully deleted a note",
            _id: note._id
        })
    })
    .catch((error) => {
        console.error(error)
        return res.status(500).send({
            message: error.message
        })
    })
}

module.exports = {get_notes, get_note, create_note, edit_note, delete_note}