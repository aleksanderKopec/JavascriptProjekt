import React, { useEffect } from 'react';
import '../components-css/UserNotes.css'
import jwt_decode from 'jwt-decode'
import AddNoteButton from './AddNoteButton';
import NoteCard from './NoteCard';
const axios = require('axios').default;

function UserNotes(props) {
    const [userNotes, setUserNotes] = React.useState([])
    let notesArray = []

    const getUserNotes = () => {
        const token = localStorage.getItem('token')
        console.log(jwt_decode(token))
        const email = jwt_decode(token).login

        axios.get(`/note/${email}/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response.data)
            setUserNotes(response.data.notes)
        })
        .catch((error) => {
            console.error(error.response)
        })
        console.log("usernotes:", userNotes)
    }

    const addNote = (note) => {
        const token = localStorage.getItem('token')
        const login = jwt_decode(token).login
        axios.put('/note',
            {
                login: login,
                note: note
            },
            {
                headers: {
                    "Authorization": `Bearer: ${token}`
                }
            }
        )
            .then((response) => {
                console.log(response.data)
                getUserNotes()
            })
            .catch((error) => {
                console.log(error.data)
            })
    }

    const editNote = (note) => {
        console.log("editing note:", note)
        const token = localStorage.getItem('token')
        axios.post(`/note/${note._id}`,
            {
                note: note
            },
            {
                headers: {
                    "Authorization": `Bearer: ${token}`
                }
            }
        )
        .then((response) => {
            console.log(response.data)
            getUserNotes()
        })
        .catch((error) => {
            console.error(error)
        })
    }

    const deleteNote = (_id) => {
        const token = localStorage.getItem('token')
        axios.delete(`/note/${_id}`,
            {
                headers: {
                    "Authorization": `Bearer: ${token}`
                }
            }
        )
        .then(() => {
            getUserNotes()
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    const remapNotesArray = () => {
        notesArray = userNotes.map((note) =>
            <NoteCard key={note._id} note={note} deleteNote={deleteNote} editNote={editNote}></NoteCard>
        )
    }

    useEffect(() => {
        getUserNotes()
        getUserNotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // getUserNotes()
    remapNotesArray()




    return (
        <div>
            <AddNoteButton addNote={addNote}></AddNoteButton>
            <div className='note-cards-container'>
                {notesArray}
            </div>
        </div>
    )
}


export default UserNotes;