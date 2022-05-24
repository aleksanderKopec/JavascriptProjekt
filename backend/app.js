// node modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authToken = require('./middleware/auth');

//db connection
mongoose.connect('mongodb://localhost:27017/test')

//load .env file
dotenv.config()

//routers
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const noteRouter = require('./routes/noteRoutes');

//app config
const app = express()
app.use(cors())
app.use(express.json())

//routes
app.use('/auth', authRouter)
app.use('/note', authToken, noteRouter)
app.use('/user', authToken ,userRouter)


port = 8020
app.listen(port, () =>{
    console.log(`Express listening on port ${port}`);
})