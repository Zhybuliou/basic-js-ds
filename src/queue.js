const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.value = null;
    this.next = null;
  }
  getUnderlyingList() {
    return this
  }

  enqueue(value) {
    const queue = new Queue(value);
    if(!this.value){
      this.value = queue;
      this.next = queue;
    }else{
      this.next.next = queue;
      this.next = queue;
    }
  }

  dequeue() {
  // if(!this.next ){
  //   return null;
  // }
  // const temp = this.value;
  // if(this.value === this.next){
  //   this.value = null;
  // }
  // this.next = this.next.next

  // return temp.val
}
}

module.exports = {
  Queue
};
