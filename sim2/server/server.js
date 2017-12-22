const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('session')

require('dotenv').config;

const app = new express()
app.use(bodyParser.json())
app.use(cors())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// sim 2 75C
app.use((req, res, next) => {

    if (!req.session.user) {
        req.session.user = {
            user_id: 1,
        }
    }

    // sim 2 75E
    next()
})



const port = 4000

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);

    app.listen(port, _=> {
        console.log(`I lower my head and think of home. ${4000}`)
    })
})