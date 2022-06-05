import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import '../components-css/AddNoteButton.css'
import CryptoJS from 'crypto-js';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import MyAlert from './MyAlert';

export default function DecryptNoteButton(props) {
    const [open, setOpen] = React.useState(false);
    const [notePassword, setNotePassword] = React.useState('')
    const [note, setNote] = React.useState(props.note)
    const [errorAlert, setErrorAlert] = React.useState(null)


    const handleClickOpen = () => {
        setOpen(true);
        console.log(note)
    };

    const validateTestEncryption = () => {
        const test1 = CryptoJS.AES.decrypt(props.note.encryptionTest, notePassword.trim()).toString()
        console.log("test1", test1)
        const test = CryptoJS.AES.decrypt(props.note.encryptionTest, notePassword.trim()).toString(CryptoJS.enc.Utf8)
        console.log("test2", test)
        if ( test !== "correct"){
            setErrorAlert({
                severity: 'error',
                title: 'Invalid password',
                value: "Given password is not valid for this card"
            })
            return false
        }
        return true

    }

    const handleClose = (event) => {
        if (event.target.id !== 'confirm-button')
        {
            setOpen(false)
            return
        }
        if (notePassword.trim() === '')
        {
            setOpen(false)
            return
        }

        if (!validateTestEncryption())
        {   
            console.log("password is invalid")
            return
        }
        const newNote = {
            ...note
        }
        newNote.content = CryptoJS.AES.decrypt(note.content, notePassword).toString(CryptoJS.enc.Utf8)
        newNote.isEncrypted = false
        newNote.encryptionTest = ''
        setOpen(false);
        setNote(newNote)
        props.editNote(newNote)
        setNotePassword('')
    };

    
    return (
        <div>
            <IconButton onClick={handleClickOpen} className='decrypt-note-button'>
                <NoEncryptionIcon></NoEncryptionIcon>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Decrypt note</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To decrypt note please specify valid password
                    </DialogContentText>
                    <TextField
                        value={notePassword}
                        onChange={event => setNotePassword(event.target.value)}
                        margin='dense'
                        id="note-password"
                        label="Password"
                        type="text"
                        fullWidth
                        variant="outlined"
                        // error={CryptoJS.AES.decrypt(props.note.encryptionTest, notePassword.trim()).toString(CryptoJS.enc.Utf8) !== "correct"}
                    />
                    {errorAlert ? 
                    <MyAlert 
                        title={errorAlert.title} 
                        value={errorAlert.value} 
                        severity={errorAlert.severity}>
                    </MyAlert> 
                    : ''}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} id='confirm-button'>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
