from collections import defaultdict 

# This class represents a directed graph 
# using adjacency list representation 
class Graph: 
  
    # Constructor 
    def __init__(self): 
  
        # default dictionary to store graph 
        self.graph = defaultdict(list) 
  
    # function to add an edge to graph 
    def addEdge(self,u,v): 
        self.graph[u].append(v) 

    def bfs_connected_component(self, graph, start):
        explored = []
        queue = [start]
        # level = [None] * (len(self.graph))
        level = defaultdict(list) 
        level[start] = 0 
    
        while queue:
            node = queue.pop(0)
            neighbours = self.graph[node]
            
            if node not in explored:

                explored.append(node)

                for neighbour in neighbours:
                    if neighbour not in explored:
                        queue.append(neighbour)
                        level[neighbour] = level[node] + 1

        return {'explored':explored, 'level': level}        

    def bfs_shortest_path(self, start, goal):
        # keep track of explored nodes
        explored = []
        # keep track of all the paths to be checked
        queue = [[start]]
        
    
        # return path if start is goal
        if start == goal:
            return start
    
        # keeps looping until all possible paths have been checked
        while queue:
            # pop the first path from the queue
            path = queue.pop(0)
            # get the last node from the path
            node = path[-1]
            if node not in explored:
                neighbours = self.graph[node]
                # go through all neighbour nodes, construct a new path and
                # push it into the queue
                for neighbour in neighbours:
                    new_path = list(path)
                    new_path.append(neighbour)
                    queue.append(new_path)
                    # return path if neighbour is goal
                    if neighbour == goal:
                        return {'minimun_path':new_path,'explored':explored}
    
                # mark node as explored
                explored.append(node)
        
        return ''
   
