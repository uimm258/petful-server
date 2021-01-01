class _Node {
  constructor(data, next){
    this.data = data
    this.next = next
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null
    this.last = null
  }

  enqueue(value) {
    // Add some data to the queue.
    const node = new _Node(value)
    
    if(this.first === null) { 
      this.first = node
    }
    
    if(this.last) {
      this.last.next = node
    }
    
    this.last = node
  }

  dequeue() {
    // Remove some data from the queue.
    if(this.first === null){
      return
    }

    const node = this.first
    this.first = this.first.next

    if(node === this.last){
      this.last === null;
    }

    return node.data
  }

  show() {
    // Return the next item in the queue.
    if(this.first.data !== null){
      //console.log(this.first.data)
      return this.first.data
    }
    return null
  }

  all() {
    // Return all items in the queue.
    if(this.first === null){
      return false
    }
    
    let newNode = this.first
    let array = []

    while(newNode){
      array.push(newNode.data)
      newNode = newNode.next
    }
    //console.log(array)
    return array
  }
}

module.exports = Queue
