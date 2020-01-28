from flask import Flask
from flask_cors import CORS
from flask import jsonify
from graph import Graph

app = Flask(__name__)
cors = CORS(app)

def createGraph():
    g = Graph()
    g.addEdge('A1','B1')
    g.addEdge('B1','A1')
    g.addEdge('B1','B2')
    g.addEdge('B2','B3')
    g.addEdge('B3','A3')
    g.addEdge('A3','B3')
    g.addEdge('B3','C3')
    g.addEdge('C3','B3')
    g.addEdge('A3','A4')
    g.addEdge('A4','A3')
    g.addEdge('C3','D3')
    g.addEdge('D3','C3')
    g.addEdge('A4','A5')
    g.addEdge('A5','A4')
    g.addEdge('D3','D2')
    g.addEdge('D2','D3')
    g.addEdge('D3','D4')
    g.addEdge('D4','D3')
    g.addEdge('A5','B5')
    g.addEdge('B5','A5')
    g.addEdge('D2','D1')
    g.addEdge('D1','D2')
    g.addEdge('D4','D5')
    g.addEdge('D5','D4')
    g.addEdge('B5','C5')
    g.addEdge('C5','B5')
    g.addEdge('D1','E1')
    g.addEdge('E1','D1')
    g.addEdge('D5','E5')
    g.addEdge('D5','C5')
    g.addEdge('E5','D5')
    g.addEdge('C5','C6')
    g.addEdge('C6','C5')
    g.addEdge('C5','D5')
    g.addEdge('E1','F1')
    g.addEdge('F1','E1')
    g.addEdge('E5','F5')
    g.addEdge('F5','E5')
    g.addEdge('C6','C7')
    g.addEdge('C7','C6')
    g.addEdge('F1','F2')
    g.addEdge('F2','F1')
    g.addEdge('F5','G5')
    g.addEdge('G5','F5')
    g.addEdge('C6','C7')
    g.addEdge('C7','C6')
    g.addEdge('F2','G2')
    g.addEdge('G2','F2')
    g.addEdge('G5','G4')
    g.addEdge('G4','G5')
    g.addEdge('G5','G6')
    g.addEdge('G6','G5')
    g.addEdge('C7','C8')
    g.addEdge('C8','C7')
    g.addEdge('C8','C7')
    g.addEdge('G2','H2')
    g.addEdge('H2','G2')
    g.addEdge('G4','H4')
    g.addEdge('H4','G4')
    g.addEdge('G6','H6')
    g.addEdge('H6','G6')
    g.addEdge('C8','D8')
    g.addEdge('D8','C8')
    g.addEdge('C8','B8')
    g.addEdge('H2','H1')
    g.addEdge('H2','H3')
    g.addEdge('H3','H2')
    g.addEdge('H4','H3')
    g.addEdge('H3','H4')
    g.addEdge('H6','H7')
    g.addEdge('H7','H6')
    g.addEdge('D8','E8')
    g.addEdge('E8','D8')
    g.addEdge('B8','A8')
    g.addEdge('A8','A7')
    g.addEdge('H7','H8')
    g.addEdge('H8','H7')
    g.addEdge('E8','E7')
    g.addEdge('E8','F8')
    g.addEdge('F8','E8')
    g.addEdge('H8','G8')
    g.addEdge('G8','H8')
    g.addEdge('F8','G8')
    g.addEdge('G8','F8')
    return g

@app.route('/')
def hello():
    paths = []
   
    g = createGraph()
    
    # pathItem1 = {
    #         "Source":'A1',
    #         "Destination":'H1',
    #         "path": g.bfs_shortest_path('A1','H1')
    #     }
        
    # paths.append(pathItem1)
    # pathItem2 = {
    #         "Source":'A1',
    #         "Destination":'A7',
    #         "path": g.bfs_shortest_path('A1','A7')
    #     }
        
    # paths.append(pathItem2)

    # pathItem3 = {
    #         "Source":'A1',
    #         "Destination":'E7',
    #         "path": g.bfs_shortest_path('A1','E7')
    #     }
        
    # paths.append(pathItem3)

    result = g.bfs_connected_component(g, 'A1')

    for node in result['explored']:
        item = {
            'distance': result['level'][node],
            'name': node
        }
        paths.append(item)
   
    return jsonify(paths)

if __name__ == "__main__":
    app.run(debug=True)