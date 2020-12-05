# DSA 35: Graph

## What is Graph

- Things that are connected. No real sequence.
  - Contains vertices, addresses of an island.
  - Each Vertice has edges, directions to an island.
- Islands that are neighbors?
- Back in tree land a bit.
- We have another node class.
- We have a new Edge class.
- Trees are a sub set of graphs.

## Terminology

- Vertex: Island, new Node Class, data value stored on a graph.
- Edge: Directions to an island, contains a vertex. Connection between Vertices.
- Neighbor: Any vertex that shares and edge with another vertex.
- Weight: A numberic value assigned to the edge, some quantitative about that edge.
- Degree: Number that describes how many Neightbors a Vertex has.

## Types of Graphs

- Cyclical: a graph that cycles, the edges can circle back around between Vertices.
- Acyclical: a graph that doesn't cycle.
- Directed: A graph whose edges have a direction.  He edge points to a single vertex.
  - Directed Acyclical Graphs are known as trees. ( DAG )
- Undirected: Each Edge goes to both Vertices.
- Connected: Each vertex contains at least one edge.
- Disconnected: You can have vertices that don't contain any edges.
- Complete: Each Vertex is connected to all other Vertices in the Graph.

## Representing A Graph

- Adjacency Matrix: 2 representation of all the vertices and their possible edges.
- Adjacency List: Each Vertex is a key to linked list of Edges.
- We are creating a Graph that uses an Adcencency list.
  - Both Directed & Undirected Graph.

## Traversals

- Breadth First Traversal
  - Visit / Process every neighbor before you process the siblings of neightbors.
- Depth First Traversal
  - Visiting the siblings of a neightbor before looking at all the other neighbor.
