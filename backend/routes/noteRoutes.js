const express = require('express')
const notesRouter = express.Router()
const notesController = require('../controllers/notesController');

notesRouter.use((req, res, next) => {
    console.log("---NOTE DEBUG ---")
    console.log(req)
    console.log(res)
    console.log("---NOTE DEBUG ---")
    next()
})

notesRouter.get('/:user_id/all', notesController.get_notes)
notesRouter.get('/:note_id', notesController.get_note)
notesRouter.put('/:note_id', notesController.create_note)
notesRouter.post('/:note_id', notesController.edit_note)

module.exports = notesRouter