class Node {
   constructor(value) {
     this.value = value;
     this.next = null
   }
}

class LinkedList{
    constructor() {
      this.head = null
    }

    prepend(value){
        const node = new Node(value);
        if(this.head == null){
          this.head = node
        } else {
          node.next = this.head;
          this.head = node
        }
    }

    append(value){
      const node = new Node(value);
      if(!this.head){
        this.head = node
      } else {
        let prev = this.head;
        while(prev.next){
          prev = prev.next
        }
        prev.next = node
      }


    }

    print(){
        let listValue = "";
        let current = this.head;
        while(current){
          listValue += `${current.value} `;
          current = current.next
        }
        console.log(listValue);
    }

    remove(value){
      if(!this.head){
        return null
      } 
      if(this.head.value === value){
        this.head.next = this.head
      }
      let prev = this.head;
      while(prev.next && prev.next.value !==  value){
        prev = prev.next
      }

      if(prev.next){
        let removeNode = prev.next;
        prev.next = removeNode.next;
        return removeNode.value
        
      }
    }
    reverse(){
      let prev = null;
      let curr = this.head;
      while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next
        
      }
      this.head = prev
    }
}

const list = new LinkedList();
list.prepend(29);
list.prepend(40);
list.prepend(50);
list.prepend(30);
list.prepend(80);
list.append(10)
list.append(100);

list.remove(50);
list.reverse()
list.print()