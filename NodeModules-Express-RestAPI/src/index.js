const express = require('express')
const morgan = require('morgan')
const dishRouter = require('./routes/dishRouter')
const leaderRouter = require('./routes/leaderRouter')
const promoRouter = require('./routes/promoRouter')

const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json()) //parses json

//routes
app.use('/dishes', dishRouter)
app.use('/leaders', leaderRouter)
app.use('/promotions', promoRouter)

app.listen(process.env.PORT || 3000, () =>{
    console.log(`Listening server on port ${3000}`)
} ) //listening on port 3000