import React, { Component } from "react";
class Movies extends Component {
  state = {
    arrFather: [
      [1, "Spider-Man", 122, "action"],
      [2, "Shauli", 123, "comedy"],
      [3, "Ferari", 124, "Cars"],
      [4, "cook", 125, "food"],
    ],
  };
  render() {
    return (
      <tbody>
        <tr id="row1">
          <td id="n1">
            {this.state.arrFather.length - (this.state.arrFather.length - 1)}
          </td>
          <td>{this.state.arrFather[0][1]}</td>
          <td>{this.state.arrFather[0][2]}</td>
          <td>{this.state.arrFather[0][3]}</td>
          <td>
            <button className="btn btn-danger" onClick={this.r1}>
              delete
            </button>
          </td>
          <td>
            <button className="btn btn-warning" onClick={this.r1p}>
              Patch
            </button>
          </td>
        </tr>
        <tr id="row2">
          <td>
            {this.state.arrFather.length - (this.state.arrFather.length - 2)}
          </td>
          <td>{this.state.arrFather[1][1]}</td>
          <td>{this.state.arrFather[1][2]}</td>
          <td>{this.state.arrFather[1][3]}</td>
          <td>
            <button className="btn btn-danger" onClick={this.r2}>
              delete
            </button>
          </td>
          <td>
            <button className="btn btn-warning" onClick={this.r2p}>
              Patch
            </button>
          </td>
        </tr>
        <tr id="row3">
          <td>{this.state.arrFather[2][0]}</td>
          <td>{this.state.arrFather[2][1]}</td>
          <td>{this.state.arrFather[2][2]}</td>
          <td>{this.state.arrFather[2][3]}</td>
          <td>
            <button className="btn btn-danger" onClick={this.r3}>
              delete
            </button>
          </td>
          <td>
            <button className="btn btn-warning" onClick={this.r3p}>
              Patch
            </button>
          </td>
        </tr>
        <tr id="row4">
          <td>{this.state.arrFather[3][0]}</td>
          <td>{this.state.arrFather[3][1]}</td>
          <td>{this.state.arrFather[3][2]}</td>
          <td>{this.state.arrFather[3][3]}</td>
          <td>
            <button className="btn btn-danger" onClick={this.r4}>
              delete
            </button>
          </td>
          <td>
            <button className="btn btn-warning" onClick={this.r4p}>
              Patch
            </button>
          </td>
        </tr>
      </tbody>
    );
  }

  r1 = () => {
    let x = document.getElementById("row1");
    x.remove();
  };
  r1p = () => {
    let y = "null";
    this.state.arrFather[0][1] = y;
    this.setState({ arr: this.state.arr });
  };
  r2 = () => {
    let x = document.getElementById("row2");
    x.remove();
  };
  r2p = () => {
    let y = "null";
    this.state.arrFather[1][1] = y;
    this.setState({ arrT: this.state.arrT });
  };
  r3 = () => {
    let x = document.getElementById("row3");
    x.remove();
  };
  r3p = () => {
    let y = "null";
    this.state.arrFather[2][1] = y;
    this.setState({ arrTH: this.state.arrTH });
  };
  r4 = () => {
    let x = document.getElementById("row4");
    x.remove();
  };
  r4p = () => {
    let y = "null";
    this.state.arrFather[3][1] = y;
    this.setState({ arrF: this.state.arrF });
  };
}

export default Movies;
