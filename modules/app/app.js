const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('../../config')
const peopleRouter = require('../people/people.router')
const petsRouter = require('../pets/pets.router')

const app = express()

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test',
}))
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/people', peopleRouter)
app.use('/pets', petsRouter)

module.exports = app
