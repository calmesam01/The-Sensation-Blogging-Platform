const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

//Bring routes
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')

//Express app
const app = express()

//Connect to DB
mongoose.connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}).then(
    () => {
        console.log('Database connected')
    }
)

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json()) 
app.use(cookieParser())
//cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))
}
//routes middleware
app.use('/api', blogRoutes)
app.use('/api', authRoutes)


//PORT
const port = process.env.PORT || 8000

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Server up and running on PORT ${port}`)
    }
})