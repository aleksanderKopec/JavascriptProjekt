const login = (req, res) => {
    console.log("login")
    return res.send("login")
}

const register = (req, res) => {
    console.log("register")
    return res.send("register")
}

module.exports = {login, register}