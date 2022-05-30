// node modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authToken = require('./middleware/auth');


//load .env file
dotenv.config()


//db connection
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)

//routers
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const noteRouter = require('./routes/noteRoutes');

//app config
const app = express()
app.use(cors())
app.use(express.json())

//routes
app.use('/api/auth', authRouter)
app.use('/api/note', authToken, noteRouter)
app.use('/api/user', authToken ,userRouter)


port = 8020
app.listen(port, () =>{
    console.log(`Express listening on port ${port}`);
})