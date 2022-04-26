
const notesController = {
    get_notes: (req, res) => {
        console.log("get_notes")
        return res.send("get_notes")
    },
    
    get_note: (req, res) => {
        console.log("get_note")
        return res.send("get_note")
    },
    
    create_note: (req, res) => {
        console.log("create_note")
        return res.send("create_note")
    },

    edit_note: (req, res) => {
        console.log("edit_note")
        return res.send("edit_note")
    },
}

module.exports = notesController