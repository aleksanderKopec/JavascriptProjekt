import React from 'react';
import '../components-css/UserNotes.css'
import jwt_decode from 'jwt-decode'
import AddNoteButton from './AddNoteButton';
const axios = require('axios').default;


class UserNotes extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            userNotes: [],
            dialogShown: false,
        }
    }
    render = () => {

        return (
             <AddNoteButton></AddNoteButton>
        );
    }

    getUserNotes = () => {
        const token = localStorage.getItem('token')
        console.log(jwt_decode(token))
        const email = jwt_decode(token).email

        axios.get(`/note/${email}/all`)
        .then((response) => {
            console.log(response.data)
        })
    }

}

export default UserNotes;