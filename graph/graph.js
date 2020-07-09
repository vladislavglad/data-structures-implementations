const LinkedList = require('../linked-list/singly-linked');

class Vertex {
    constructor(value = undefined) {
        // It is not really needed: index in vertices arr is the name!
        this.value = value; 

        this.visited = false;
        this.adjList = new LinkedList();
    }
}

class Graph {
    constructor() {
        this.vertices = [];
    }

    addVertex(v) {
        if (this.vertices[v] === undefined)
            this.vertices[v] = new Vertex(v);
    }

    addEdge(v1, v2) {
        if (this.vertices[v1] === undefined) 
            this.addVertex(v1);
    
        this.vertices[v1].adjList.addLast(v2);
    }

    toString() {
        let str = "";
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i] === undefined)
                continue;
            else {
                // console.log("Vertex: " + this.vertices[i].value + 
                // " has edges with " + this.vertices[i].adjList);

                str += "Vertex: " + i + " has edges with " + this.vertices[i].adjList + "\n";
            }
        }
        return str;
    }
}

module.exports = Graph;