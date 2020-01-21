import React, { Component } from "react";

export class Path extends Component {
    render() {
        if (this.props.path == null)
            return <h5 className="p-2">No Paths</h5>

        return <li>Path
            <ul>
                <li>{`Source:${this.props.path.Source}`}</li>
                <li>{`Destination:${this.props.path.Destination}`}</li>
                <li>
                    <ul>Explored
                        <li>
                            <div>{this.props.path.path.explored.map(p=>`${p},`)}</div>
                        
                        </li>
                    </ul>
                    <ul>minimun_path
                    <li>
                    <div>{this.props.path.path.minimun_path.map(p=>`${p},`)}</div>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </li>
    }
}