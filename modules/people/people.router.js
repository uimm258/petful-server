const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const person = People.get();
  return res.json(person).status(200)
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body;
  const newPerson = People.enqueue(person)
  res.json(newPerson).status(200);
})

module.exports = router
