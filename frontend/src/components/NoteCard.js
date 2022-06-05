import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import EditNoteButton from './EditNoteButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import DecryptNoteButton from './DecryptNoteButton';
import '../components-css/NoteCard.css'

export default function NoteCard(props) {
    
    // eslint-disable-next-line no-unused-vars
    const [note, setNote] = React.useState(props.note)

    const handleDelete = () => {
        props.deleteNote(note._id)
    }

    const editNote = (newNote) => {
        setNote(newNote)
        console.log("Editing note in noteCard", newNote)
        props.editNote(newNote)
    }

    return (
        <Card sx={{ width: "13rem", height: "13rem" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {note.title}
                </Typography>
                <Typography sx={{maxHeight: "4.5rem", overflowWrap: "break-word", overflowY: "auto",}} 
                paragraph={true} noWrap={false} variant="body1">
                    {note.content}
                </Typography>
            </CardContent>
            <CardActions sx={{}}>
                <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
                <EditNoteButton editNote={editNote}  note={note} />
                {note.isEncrypted ? <DecryptNoteButton note={note} editNote={editNote}></DecryptNoteButton> : ''}
            </CardActions>
        </Card>
    );
}