const Queue = require('../queue/Queue')
const store = require('../../store')
const { dogs, cats } = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}
//console.log(pets)

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  // Return the pets next in line to be adopted.
  getCats(){
    const cat = pets.cats.all()
    //console.log(cat)
    return cat
  },

  getDogs(){
    const dog = pets.dogs.all()
    //console.log(dog)
    return dog
  },

  show(){
    const cat = pets.cats.show()
    const dog = pets.dogs.show()
    return { cat, dog }
  },

  dequeueCats() {
    // Remove a pet from the queue.
    return pets.cats.dequeue()
  },

  dequeueDogs(){
    return pets.dogs.dequeue()
  }
}
