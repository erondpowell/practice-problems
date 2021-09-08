const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    movieEl = document.createElement("li");
    /// Ways to check if a property exists in an object
    // if ('info' in movie){};
    // if (movie.info === undefined){};
    const { info, ...otherProps } = movie;
    // console.log(otherProps);
    // const {title: movieTitle} = info;
    // let text = movieTitle + " - ";
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.apply(movie) + " - ";
    // let text = movie.getFormattedTitle() + " - ";
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (title.trim() === "" || extraName.trim() === "" || extraValue === "") {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
        }
        this._title = val;
        return;
      },

      get title() {
        return this._title;
      },

      [extraName]: extraValue,
    },

    id: Math.random(),

    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
//codeine
