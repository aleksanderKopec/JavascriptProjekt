import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import '../components-css/AddNoteButton.css'
import CryptoJS from 'crypto-js';

export default function EditNoteButton(props) {
    const [open, setOpen] = React.useState(false);
    const [textTitle, setTextTitle] = React.useState(props.note.title);
    const [textContent, setTextContent] = React.useState(props.note.content);
    const [notePassword, setNotePassword] = React.useState('')

    const handleClickOpen = () => {
        setOpen(true);
        setTextContent(props.note.content)
        console.log(props.note)
    };

    const handleClose = (event) => {
        if (event.target.id !== 'confirm-button')
        {
            setOpen(false)
            return
        }
        if (textTitle.trim() === '' || textContent.trim() === '')
        {
            setOpen(false)
            return
        }
        const note = props.note
        note.title = textTitle
        note.content = textContent
        if (notePassword.trim() !== '')
        {
            if (note.isEncrypted)
            {
                console.log("this note is already encrypted")
                return
            }
            const encrypted = CryptoJS.AES.encrypt(textContent, notePassword).toString()
            note.content = encrypted
            note.isEncrypted = true
            note.encryptionTest = CryptoJS.AES.encrypt("correct", notePassword).toString()
        }
        setTextTitle(note.title)
        setTextContent(note.content)
        setNotePassword('')
        props.editNote(note)
        setOpen(false);
    };



    return (
        <div>
            <IconButton onClick={handleClickOpen} className='edit-note-button'>
                <EditIcon></EditIcon>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit note</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To edit note please specify its title and contents
                    </DialogContentText>
                    <TextField
                        value={textTitle}
                        onChange={event => setTextTitle(event.target.value)}
                        autoFocus
                        margin="dense"
                        id="note-title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        error={textTitle.trim() === ""}
                    />
                    <TextField
                        value={textContent}
                        onChange={event => setTextContent(event.target.value)}
                        margin='dense'
                        id="note-content"
                        label="Content"
                        type="text"
                        fullWidth
                        variant="outlined"
                        multiline
                        minRows={4}
                        required
                        error={textContent.trim() === ""}
                    />
                    <TextField
                        value={notePassword}
                        onChange={event => setNotePassword(event.target.value)}
                        margin='dense'
                        id="note-password"
                        label="Password"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} id='confirm-button'>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
