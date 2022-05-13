// node modules
const express = require('express');
const cors = require('cors');

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
app.use('/note', noteRouter)
app.use('/user', userRouter)


port = 8020
app.listen(port, () =>{
    console.log(`Express listening on port ${port}`);
})