class Graph{
  constructor() {
    this.adjacenyList = {}
  }

  addVertex(vertex){
    if(!this.adjacenyList[vertex]){
      this.adjacenyList[vertex] = new Set()
    }
  }

  addEdges(vertex1, vertex2){
     if (!this.adjacenyList[vertex1]) {
       this.adjacenyList[vertex1] = new Set();
     }
    if (!this.adjacenyList[vertex2]) {
      this.adjacenyList[vertex2] = new Set();
    }

    this.adjacenyList[vertex1].add(vertex2);
    this.adjacenyList[vertex2].add(vertex1)
  }

  print(){
    for(let vertex in this.adjacenyList){
      let neighbours = Array.from(this.adjacenyList[vertex])
      console.log(`${vertex} -> ${neighbours.join(", ")}`);
    }
  }

  hasCyclic(){
    let visited = new Set();
    for(let vertex in this.adjacenyList){
      if(!visited.has(vertex)){
        if(this.hasCyclicUtil(vertex, visited, null)){
          return true
        }
      }
    }
    return false
  }

  hasCyclicUtil(vertex, visited, parent){
    visited.add(vertex);
    for(let neighbour of this.adjacenyList[vertex] ){
      if(!visited.has(neighbour)){
        if(this.hasCyclicUtil(neighbour, visited, vertex )){
          return true
        } else if(parent !== neighbour){
          return true
        }
      }
    }
    return false
  }

  bfs(startVertex){
    let visited = new Set();
    let queue = [startVertex];
    visited.add(startVertex);
    while(queue.length){
      let current = queue.shift();
      console.log(current);

      for(let neighbour of this.adjacenyList[current]){
        if(!visited.has(neighbour)){
          queue.push(neighbour);
          visited.add(neighbour)
        }
      }
    }
  }
}

const graph = new Graph();
graph.addEdges(10, 20);
graph.addVertex(50);
graph.addVertex(100);
graph
graph.addEdges(10, 100);
graph.print()
console.log(graph.hasCyclic());
graph.bfs(100)