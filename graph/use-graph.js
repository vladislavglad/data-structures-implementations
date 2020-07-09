const Graph = require('./graph');

let graph = new Graph();
graph.addEdge(0,1);
graph.addEdge(1,2);
graph.addEdge(2,0);
graph.addEdge(3,2);

console.log('' + graph); // Implicitly calls .toString()
