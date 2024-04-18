class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Queue{
  constructor() {
    this.front = null;
    this.rear = null
  }

  enqueue(value){
    const node = new Node(value);
    if(!this.front){
      this.front = node;
      this.rear = node
    }
    this.rear.next = node;
    this.rear = node
  }

  dequeue(){
    if(this.front == null){
      return null
    }
    let removedValue = this.front.value;
    this.front = this.front.next;
    return removedValue
  }

  print(){
    let curr = this.front;
    let value = ''
    while(curr){
      value += `${curr.value} `;
      curr = curr.next
    }
    console.log(value);
  }

}

const queue = new Queue();
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(10);
queue.enqueue(60);
queue.enqueue(50);

queue.print()

