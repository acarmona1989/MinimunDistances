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

    
    # def distanceToRoot()


       # Function to print a BFS of graph 
    def BFS(self, s): 
        result = []
        steps = 0
        leaves = {}
        queue = [] 
        queue.append(s) 
        visited = {}
        visited.update({s:True}) 
  
        while queue: 
            s = queue.pop(0) 
            result.append(s)
            
            if len(self.graph[s]) == 0:
                leaves.update({
                   s:steps
                })
            else:
                steps += 1
            
            for i in self.graph[s]: 
                if i not in visited: 
                    queue.append(i) 
                    visited.update({i:True})

        return {'exits':leaves,
                'visited':result}


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
                        return {'path':new_path,'explored':explored}
    
                # mark node as explored
                explored.append(node)
        
        return ''
   