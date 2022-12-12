import React, { Component } from "react";
import OnlyRow from "./onlyRow";

class MoviesTable extends Component {
  state = {
    tableHeader: ["Rating", "Name", "img", "id", "Genare", "Delete", "Like"],
  };
  render() {
    return (
      <React.Fragment>
        <table
          className="table table-striped table-dark"
          style={{ marginBottom: "0" }}
        >
          <thead>
            <tr>
              {this.state.tableHeader.map((val) => {
                return (
                  <th scope="col" style={{ color: "red" }}>
                    {val}
                  </th>
                );
              })}
            </tr>
          </thead>
          {this.props.movies.map((val, index) => {
            return (
              <OnlyRow
                key={val.id}
                number={val.number}
                name={val.name}
                id={val.id}
                gener={val.gener}
                count={val.c}
                liked={val.liked}
                dele={() => this.props.del(val.id)}
                like={() => this.props.lik(val.id)}
                img={val.img}
              />
            );
          })}
        </table>
      </React.Fragment>
    );
  }
}
export default MoviesTable;
