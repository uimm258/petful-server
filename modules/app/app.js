const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('../../config')
const peopleRouter = require('../people/people.router')
const CatsRouter = require('../pets/cats.router')
const DogsRouter = require ('../pets/dogs.router')

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
app.use('/cats', CatsRouter)
app.use('/dogs', DogsRouter)


module.exports = app
