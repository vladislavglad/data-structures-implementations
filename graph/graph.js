class Vertex {
    constructor(value = undefined) {
        // It is not really needed: index in vertices arr is the name!
        this.value = value; 

        this.visited = false;
        this.adjList = []; // Use array, easier to iterate through.
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
        
        if (this.vertices[v2] === undefined) 
            this.addVertex(v2);
    
        this.vertices[v1].adjList.push( new Vertex(v2) );
    }

    toString() {
        let str = "";
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i] === undefined)
                continue; 
            else {

                str += "Vertex: " + i + " has edges with";  
                for (let j = 0; j < this.vertices[i].adjList.length; j++) {

                    if (this.vertices[i].adjList[j] !== undefined)
                        str += " " + this.vertices[i].adjList[j].value;

                }
                str += "\n";
            }
        }
        return str;
    }
}

module.exports = Graph;