const express = require('express');
const userController = require('./controllers/userController');
const notesController = require('./controllers/notesController');

const app = express()

app.post('/user/login', userController.login)
app.post('/user/register', userController.register)
app.post('/user/:user_id', userController.get_user_info)
app.get('/notes/:user_id', notesController.get_notes)
app.get('/note/:note_id', notesController.get_note)
app.put('/note/:note_id', notesController.create_note)
app.post('/note/:note_id', notesController.edit_note)


port = 8020
app.listen(port, () =>{
    console.log(`Express listening on port ${port}`);
})