import "./App.css";
import { Routes, Route } from "react-router-dom";
import OnlyTable from "./component/onlyTable";
import React, { Component } from "react";
import Formiktry from "./component/formiktry";

class App extends Component {
  state = {
    arr: [
      {
        number: "⭐️⭐️⭐️⭐️⭐️",
        name: "Spider-Man",
        id: 122,
        gener: "Action",
        c: false,
        liked: "🤍",
        img: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
      },
      {
        number: "⭐️⭐️⭐️",
        name: "Baby driver",
        id: 123,
        gener: "Action",
        c: false,
        liked: "🤍",
        img: "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_.jpg",
      },
      {
        number: "⭐️⭐️⭐️⭐️",
        name: "Fast&Furious",
        id: 124,
        gener: "Action",
        c: false,
        liked: "🤍",
        img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/fast-and-furious-9-et00056556-1662618657.jpg",
      },
      {
        number: "⭐️⭐️⭐️",
        name: "SkyScraper",
        id: 125,
        gener: "Action",
        c: false,
        liked: "🤍",
        img: "https://images.moviesanywhere.com/6a76278caf399ccf11d8bb2a239d03ac/9e89b3ad-6cd0-4c3d-a96e-33e7d94dc5a5.jpg",
      },
      {
        number: "⭐️⭐️⭐️⭐️⭐️",
        name: "Security",
        id: 126,
        gener: "Action",
        c: false,
        liked: "🤍",
        img: "https://m.media-amazon.com/images/M/MV5BZmI4OGE0MTktOTQ3ZC00ZDlhLTg1OGMtMjRiMTMwNzgzZDIyXkEyXkFqcGdeQXVyNjc4Nzk3NzU@._V1_.jpg",
      },
      {
        number: "⭐️⭐️⭐️⭐️⭐️",
        name: "Avatar",
        id: 141,
        gener: "Adventure",
        c: false,
        liked: "🤍",
        img: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg",
      },
      {
        number: "⭐️⭐️⭐️⭐️⭐️",
        name: "Violent Night",
        id: 142,
        gener: "Drama",
        c: false,
        liked: "🤍",
        img: "https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_FMjpg_UX1000_.jpg",
      },
      {
        number: "⭐️⭐️⭐️⭐️",
        name: "Flight",
        id: 143,
        gener: "Drama",
        c: false,
        liked: "🤍",
        img: "https://m.media-amazon.com/images/I/51xEN-fJAUL._AC_SY580_.jpg",
      },
      {
        number: "⭐️⭐️⭐️",
        name: "The Good Nurse",
        id: 144,
        gener: "Drama",
        c: false,
        liked: "🤍",
        img: "https://m.media-amazon.com/images/M/MV5BOGZhODQ3NDUtMjE1OS00MzEzLWFhY2MtY2U2YjQzYWUyYWQwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
      },
      {
        number: "⭐️⭐️",
        name: "The Town",
        id: 145,
        gener: "Drama",
        c: false,
        liked: "🤍",
        img: "https://m.media-amazon.com/images/M/MV5BMTcyNzcxODg3Nl5BMl5BanBnXkFtZTcwMTUyNjQ3Mw@@._V1_FMjpg_UX1000_.jpg",
      },
      {
        number: "⭐️⭐️⭐️⭐️",
        name: "Moonbound",
        id: 162,
        gener: "Comedy",
        c: false,
        liked: "🤍",
        img: "https://m.media-amazon.com/images/M/MV5BN2UzODFkYTUtZDkzMS00MGQ1LTk1MzMtOTQ0NjM3ZmY5OTlmXkEyXkFqcGdeQXVyMjMwODE4ODI@._V1_.jpg",
      },
      {
        number: "⭐️⭐️⭐️⭐️⭐️",
        name: "Me Time",
        id: 163,
        gener: "Comedy",
        c: false,
        liked: "🤍",
        img: "https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/445/8mvclnhqjup4jxaxx36lnypmwsi-537.jpg",
      },
      {
        number: "⭐️⭐️⭐️⭐️⭐️",
        name: "Free guy",
        id: 164,
        gener: "Comedy",
        c: false,
        liked: "🤍",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_20cs_freeguy_homeent_21930_49e74453.jpeg?region=0%2C0%2C540%2C810",
      },
      {
        number: "⭐️⭐️⭐️⭐️⭐️",
        name: "Luck",
        id: 165,
        gener: "Comedy",
        c: false,
        liked: "🤍",
        img: " https://m.media-amazon.com/images/M/MV5BNzhlNTAyY2YtNWUyYi00YmE3LWE2OTctZDI2MmJkNmZiMmY0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route
            exact
            path="/"
            element={<OnlyTable arr={this.state.arr} />}
          ></Route>

          <Route
            exact
            path="/add"
            element={
              <Formiktry addMovie={(event, val) => this.addMovie(event, val)} />
            }
          ></Route>
        </Routes>
      </React.Fragment>
    );
  }

  addMovie = (event, val) => {
    console.log("hi");
    const newMovie = {
      number: val.Rating,
      name: val.Name,
      id: val.Id,
      gener: val.Gener,
      c: false,
      liked: "🤍",
      img: val.Img,
    };
    console.log(newMovie);
    this.state.arr.push(newMovie);
    this.setState({ arr: this.state.arr });
    console.log("movies: " + this.state.arr);
  };

  devide = (ev) => {
    if (ev.key == "Enter" && ev.target.value > 0) {
      this.setState({ pagevied: ev.target.value });
      this.setState({ number: 0 });
      this.setState({ number2: ev.target.value });
    }
  };
  activeChange = (num) => {
    this.state.number = this.state.pagevied * num - this.state.pagevied;
    this.state.number2 = this.state.pagevied * num;
    this.setState({ activePage: num });
    this.setState({ number: this.state.number });
    this.setState({ number2: this.state.number2 });
  };

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
    let selectedGener = gener;
    this.setState({ selectedGener });
  };

  // return movie count
  getMovieCount = (gener) => {
    if (gener != "All") {
      return this.state.arr.filter((val) => gener == val.gener).length;
    } else {
      return this.state.arr.length;
    }
  };
}

export default App;
