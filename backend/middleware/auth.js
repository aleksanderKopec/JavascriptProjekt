const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1].trim()
    console.log(token)
    if (!token)
    {
        return res.status(401).send({
            message: "Not authorized"
        })
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
        if (error)
        {
            console.log(error)
            return res.status(403).send({
                message: "Could not verify authentication token"
            })
        }
        req.user = user
        next()
    })
}

module.exports = authToken