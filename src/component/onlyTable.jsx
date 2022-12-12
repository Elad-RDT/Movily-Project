import React, { Component } from "react";
import Serve from "./serve";
import MoviesTable from "./moviesTable";
import Pagination from "./pagination";

class OnlyTable extends Component {
  state = {
    arr: this.props.arr,
    selectedGener: "All",
    currentPage: 1,
    moviesPerPage: 5,
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <Serve
            pick={(gener) => this.pick(gener)}
            movieCount={(gener) => this.getMovieCount(gener)}
            changeNumOfMovies={(num) => this.changeNumOfMovies(num)}
          />
        </header>

        <MoviesTable movies={this.filterArr()} del={this.del} lik={this.lik} />
        <Pagination
          totalMovies={this.filterArrByGener().length}
          moviesPerPage={this.state.moviesPerPage}
          paginate={this.paginate}
        />
      </React.Fragment>
    );
  }

  // delete movie from list
  del = (id) => {
    const arr = this.state.arr.filter((val) => val.id != id);
    this.setState({ arr });
  };

  // like movie
  lik = (id) => {
    this.state.arr.map(function (val) {
      if (val.id == id) {
        val.liked = val.c ? "🤍" : "❤️";
        val.c = !val.c;
      }
    });
    this.setState({ arr: this.state.arr });
  };

  // change selected gener to passed value
  pick = (gener) => {
    this.setState({ selectedGener: gener });
    this.setState({ currentPage: 1 });
  };

  // return movie count
  getMovieCount = (gener) => {
    if (gener != "All") {
      return this.state.arr.filter((val) => gener == val.gener).length;
    } else {
      return this.state.arr.length;
    }
  };

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  filterArr = () => {
    const filteredByGener = this.filterArrByGener(); // list of movies of the selected gener
    const indexOfLastMovie = this.state.currentPage * this.state.moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - this.state.moviesPerPage;
    const currentArr = filteredByGener.slice(
      indexOfFirstMovie,
      indexOfLastMovie
    );
    return currentArr;
  };

  filterArrByGener = () => {
    return this.state.arr.filter(
      (val) =>
        val.gener == this.state.selectedGener ||
        this.state.selectedGener == "All"
    );
  };

  changeNumOfMovies = (num) => {
    if (num.keyCode == 13) {
      if (num.target.value > 0) {
        this.setState({ moviesPerPage: num.target.value });
      } else {
        this.setState({ moviesPerPage: 5 });
      }
    }
  };
}
export default OnlyTable;
