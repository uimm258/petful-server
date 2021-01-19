const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
    const dog = Pets.getDogs()
    //console.log(dog)
    return res.json(dog).status(200)
})

router.delete('/', json, (req, res) => {
    // Remove a pet from adoption.
    const dog = Pets.dequeueDogs()
    const person = People.dequeue()
    return res.json({ person, dog }).status(200)
})

module.exports = router