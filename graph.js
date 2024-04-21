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
    let result =[]
    let queue = [startVertex];
    visited.add(startVertex);
    while(queue.length){
      let current = queue.shift();
      result.push(current)

      for(let neighbour of this.adjacenyList[current]){
        if(!visited.has(neighbour)){
          queue.push(neighbour);
          visited.add(neighbour)
        }
      }
    }
    return result
  }

  dfs(startVertex){
    const stack = [startVertex];
    const visited = new Set();
    const result =[];
    while(stack.length){
      const vertex = stack.pop();
      if(!visited.has(vertex)){
        visited.add(vertex);
        result.push(vertex);

        for(const neighbour of this.adjacenyList[vertex]){
          stack.push(neighbour)
        }
      }
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdges("A", "B");
graph.addEdges("A", "D");
graph.addEdges("B", "C");
graph.addEdges("B", "E");
graph.addEdges("D", "E");
graph.addEdges("F", "E");

graph.print()
console.log(graph.dfs("A"));
console.log(graph.bfs("A"));