const express = require('express')
const morgan = require('morgan')
const leaderRouter = require('./routes/leader.routes')
const promoRouter = require('./routes/promo.routes')

const app = express()

// settings
app.set('port', 3000 || process.env.PORT);

//middlewares
app.use(morgan('dev'))
app.use(express.json()) //parses json

//routes
app.use('/leaders', leaderRouter)
app.use('/promotions', promoRouter)

module.exports= app;