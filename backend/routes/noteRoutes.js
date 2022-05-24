const express = require('express')
const notesRouter = express.Router()
const notesController = require('../controllers/notesController');

notesRouter.use((req, res, next) => {
    console.log("---NOTE DEBUG ---")
    console.log("Request body: ", req.body)
    // console.log(res)
    console.log("---NOTE DEBUG ---")
    next()
})

notesRouter.get('/:userId/all', notesController.get_notes)
notesRouter.get('/:noteId', notesController.get_note)
notesRouter.put('/', notesController.create_note)
notesRouter.post('/:noteId', notesController.edit_note)

module.exports = notesRouter