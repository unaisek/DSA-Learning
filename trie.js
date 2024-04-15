class Node {
  constructor() {
    this.children = {};
    this.isEnd = false
  }
}

class Trie{
  constructor() {
    this.root = new Node()
  }

  insert(word){
    let node = this.root;
    for(let char of word){
      if(!node.children[char]){
        node.children[char] = new Node()
      }
      node = node.children[char]
    }
    node.isEnd = true
  }

  findWords(prefix){
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }

    return this.getWordsWithPrefix(node, prefix)
  }

  getWordsWithPrefix(node, prefix){
    let result = []
    if(node.isEnd){
      result.push(prefix)
    }

    for (let char in node.children){
      result = result.concat(this.getWordsWithPrefix(node.children[char], prefix+char))
    }
    return result
  }

}

const trie = new Trie()
trie.insert("arif");
trie.insert("abdul");
console.log(trie.findWords("a"));