const get_notes = (req, res) => {
    console.log("get_notes")
    return res.send("get_notes")
}

const get_note = (req, res) => {
    console.log("get_note")
    return res.send("get_note")
}

const create_note = (req, res) => {
    console.log("create_note")
    return res.send("create_note")
}

const edit_note =  (req, res) => {
    console.log("edit_note")
    return res.send("edit_note")
}

module.exports = {get_notes, get_note, create_note, edit_note}