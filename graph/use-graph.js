const Graph = require('./graph');

let graph = new Graph();
graph.addEdge(0,1);
graph.addEdge(1,2);
graph.addEdge(2,0);
graph.addEdge(3,2);

// Vertex 7 must also be created, 
// even if it does not point anywhere.
graph.addEdge(1,7); 

console.log('' + graph); // Implicitly calls .toString()

console.log("DFS starting at Vertex 3:");
Graph.DFS(graph.vertices[3]);