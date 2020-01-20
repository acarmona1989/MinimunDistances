import React from 'react';
import {RestDataSource} from './webService/RestDataSource'

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paths: ''
        }
        this.dataSource = new RestDataSource("http://localhost:5000/", 
            (err) => 'this.props.history.push(`/error/${err}`)');
    }

    handleGetPaths(){
        this.dataSource.GetData(data => this.setState({paths: {data}}));
    }

    render() {
        const { paths } = this.props;
        return <React.Fragment>
            <div className="App">
                <div className="row">
                    <div className="col-6">
                        <div id="post">Which are the paths with minimum distances?</div>
                        <div className="content">
                            <table className="table table-bordered">
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
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="content">
                            Reponse:
                            {this.state.paths}
          </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button type="button" onClick={this.handleGetPaths()} className="btn btn-primary">Find</button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    }
}

function mapStateToProps(state) {
    const { paths } = state;
    return {
        paths
    };
}
