class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class Bst {
  constructor() {
    this.root = null
  }

  insert(value){
    const node = new Node(value);
    if(!this.root){
      this.root = node;
    } else {
      this.insertNode(this.root, node)
    }
  }

  insertNode(root, node){
    if(node.value < root.value){
      if(!root.left){
        root.left = node
      } else {
        this.insertNode(root.left, node)
      }
    } else {
      if(!root.right){
        root.right = node;
      } else {
        this.insertNode(root.right, node)
      }
    }
  }

  inOrder(root){
    if(root){
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

}

const bst = new Bst();
bst.insert(40);
bst.insert(20);
bst.insert(60);
bst.insert(30);
bst.insert(10);
bst.insert(50);
bst.insert(70);

bst.inOrder(bst.root)