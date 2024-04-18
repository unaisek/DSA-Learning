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

  LCP(){
    let node = this.root;
    let prefix = "";
    while(Object.keys(node.children).length === 1 && !node.isEnd){
      const char = Object.keys(node.children)[0];
      prefix += char;
      node = node.children[char]
    }
    return prefix
  }

}

const trie = new Trie()
trie.insert("abdul rafi");
trie.insert("abdul rauf");
trie.insert("abdul raheem")
// console.log(trie.findWords("a"));

console.log(trie.LCP());