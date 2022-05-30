import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../components-css/AddNoteButton.css'
import jwt_decode from 'jwt-decode'
const axios = require('axios').default;

export default function AddNoteButton() {
    const [open, setOpen] = React.useState(false);
    const [textTitle, setTextTitle] = React.useState('');
    const [textContent, setTextContent] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (event.target.id === 'confirm-button')
        {
            if (textTitle.trim() === '' || textContent.trim() === '')
                return
        }
        const token = localStorage.getItem('token')
        const login = jwt_decode(token).login
        axios.put('/note', 
            {
                login: login,
                note: {
                    content: textContent,
                    title: textTitle
                }
            },
            {
                headers:{
                    "Authorization": `Bearer: ${token}`
                }
            }
        )
        .then((response) => {
            
        })
        setTextContent('')
        setTextTitle('')
        setOpen(false);
    };



    return (
        <div>
            <Fab onClick={handleClickOpen} className='add-note-button' sx={{position: 'absolute'}}>
                <AddIcon></AddIcon>
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add note</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add note please specify its title and contents
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} id='confirm-button'>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
