class MinHeap{
  constructor() {
    this.heap = []
  }

  getParentIndex(index){
    return Math.floor((index - 1)/2)
  }

  getLeftChildIndex(index){
    return 2 * index + 1
  }
  getRightChildIndex(index){
    return 2 * index + 2
  }
  hasParent(index){
    return this.getParentIndex(index) >= 0
  }
  hasLeftChild(index){
    return this.getLeftChildIndex(index) < this.heap.length
  }
  hasRightChild(index){
    return this.getRightChildIndex(index) < this.heap.length
  }
  getParentValue(index){
    return this.heap[this.getParentIndex(index)]
  }
  getLeftChildValue(index){
    return this.heap[this.getLeftChildIndex(index)]
  }
  getRightChildValue(index){
    return this.heap[this.getRightChildIndex(index)]
  }
  swap(index1, index2){
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp
  }


  insert(value){
    this.heap.push(value);
    this.heapifyUp(this.heap.length -1)
  }

  heapifyUp(index){
    if(this.hasParent(index) && this.getParentValue(index) > this.heap[index]){
      this.swap(index, this.getParentIndex(index));
      this.heapifyUp(this.getParentIndex(index))
    }
  }

  allAboveNode(value){
    let result = [];
    let index = this.heap.indexOf(value);
    if(index === -1 || index === 0){
      return []
    }

    let currentIndex = index

    while(currentIndex !== 0){
      let parentIndex = this.getParentIndex(currentIndex);
      result.push(this.heap[parentIndex]);
      currentIndex = parentIndex
    }
    return result
  }

  delete(){
    let removeValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0)
  }

  heapifyDown(index){
    let smallest = index;
    if(this.hasLeftChild && this.getLeftChildValue(index) < this.heap[smallest]){
      smallest = this.getLeftChildIndex(index)
    }
    if(this.hasRightChild && this.getRightChildValue(index) < this.heap[smallest]){
      smallest = this.getRightChildIndex(index)
    }

    if(index !== smallest){
      this.swap(index, smallest);
      this.heapifyDown(smallest)
    }
  }

  display(){
    return console.log(this.heap);
  }
}

const minHeap = new MinHeap();
minHeap.insert(20);
minHeap.insert(50);
minHeap.insert(30);
minHeap.insert(10);
minHeap.insert(25)
minHeap.insert(60);
minHeap.delete()
minHeap.display()
console.log(minHeap.allAboveNode(60));


