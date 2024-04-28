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

  delete(value){
    this.root = this.deleteNode(this.root, value)
  }

  deleteNode(root, value){
    if(value < root.value){
      root.left = this.deleteNode(root.left, value)
    } else if(value > root.value) {
      root.right = this.deleteNode(root.right, value)
    } else {
      if(!root.left && !root.right){
        return null;
      } else if(!root.left){
        return root.right;
      } else if(!root.right){
        return root.left;
      }

      root.value = this.min(root.right);
      console.log(root.value,"min");
      root.right = this.deleteNode(root.right, root.value)
    }
    return root
  }

  inOrder(root){
    if(root){
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  min(root){
    if(!root.left){
      return root.value
    } else {
      return this.min(root.left)
    }
  }


  findSecLargest(root){
    let curr = root;
    let parent = null
    while(curr.right){
      parent = curr;
      curr = curr.right
    }

    if(curr.left){
      curr = curr.left
      while(curr.right){
        curr = curr.right
      }

      return curr.value
    }

    return parent ? parent.value : null
  }

  findLCA(root, value1, value2){
    if(!root){
      return null
    }
    if(value1 === root.value || value2 === root.value){
      return root.value
    }

    const leftLCA = this.findLCA(root.left, value1, value2);
    const rightLCA = this.findLCA(root.right, value1, value2)

    if(leftLCA && rightLCA) {
      return root.value
    }

    return leftLCA || rightLCA
  }

  levelOrder(root){
    const queue = [root]
    while(queue.length){
      let node = queue.pop();
      console.log(node.value);
      if(node.left){
        queue.unshift(node.left)
      }
      if(node.right){
        queue.unshift(node.right)
      }
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
bst.insert(65)

// bst.delete(40)

bst.inOrder(bst.root)

console.log("secLarge: ", bst.findSecLargest(bst.root));

console.log(bst.findLCA(bst.root,10,65));
bst.levelOrder(bst.root)