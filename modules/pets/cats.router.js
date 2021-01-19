const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const cat = Pets.getCats()
  //console.log(cat)
  return res.json(cat).status(200)
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const cat = Pets.dequeueCats()
  const person = People.dequeue()
  return res.json({person, cat}).status(200)
})

module.exports = router
