import React, { Component } from "react";

export class Node extends Component {
    render() {
        if (this.props.node == null)
            return <h5 className="p-2">No Paths</h5>

        return <tr>
            <td>{this.props.node.name}
            </td>
            <td>{this.props.node.distance}
            </td></tr>
    }
}