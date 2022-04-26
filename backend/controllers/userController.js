
const userController = {
    login: (req, res) => {
        console.log("login")
        return res.send("login")
    },

    register: (req, res) => {
        console.log("register")
        return res.send("register")
    },
    get_user_info: (req, res) => {
        console.log("get_user_info")
        return res.send("get_user_info")
    }
}

module.exports = userController