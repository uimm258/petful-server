const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/cats', (req, res) => {
  // Return all pets currently up for adoption.
  const cat = Pets.getCats()
  //console.log(cat)
  return res.json(cat).status(200)
})

router.get('/dogs', (req, res) => {
  const dog = Pets.getDogs()
  //console.log(dog)
  return res.json(dog).status(200)
})

router.delete('/:pet', json, (req, res) => {
  // Remove a pet from adoption.
  const pets = req.params
  const removePet = Pets.dequeue(pets)
  return res.json(removePet).status(200)
})

module.exports = router
