import React from 'react';
import { RestDataSource } from './webService/RestDataSource'
import { Node } from './Node'

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        }
        this.dataSource = new RestDataSource("http://localhost:5000/",
            (err) => function () { });
    }

    handleGetPaths() {

        this.dataSource.GetData(data => this.setState({ nodes: data }));
    }

    render() {
        return <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <table className="table table-sm table-bordered">
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>A</td>
                                    <td>*</td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>B</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td bgcolor="#000000"></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>D</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>E</td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td bgcolor="#000000"></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>G</td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>H</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td bgcolor="#000000"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col-6">
                                <button type="button" onClick={this.handleGetPaths()} className="btn btn-primary">Find</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <table className="table table-sm table-dark">
                            <thead>
                                <tr>
                                    <td>Node</td>
                                    <td>Distance</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.nodes.map(p => <Node key={p.name} node={p}></Node>)}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </React.Fragment>
    }
}

