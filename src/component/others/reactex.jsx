import React, { Component } from "react";
class OnlyRow extends Component {
  state = {};
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.number}</td>
          <td>{this.props.name}</td>
          <td>
            <img src={this.props.img} alt="" style={{ width: 150 }} />
          </td>
          <td>{this.props.id}</td>
          <td>{this.props.gener}</td>
          <td>
            <button
              onClick={this.props.dele}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </td>
          <td>
            <label onClick={this.props.like} style={{ fontSize: 25 }}>
              {this.props.liked}
            </label>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default OnlyRow;
