let { movies } = require("../db/db");

class MoviesControllers {
  getMovies(req, res) {
    res.status(200).send(movies);
  }

  getMovieById(req, res) {
    const {
      params: { movieId }
    } = req;
    const [movie] = movies.filter(
      (movie) => movie.id === Number(movieId)
    );
    if (movie) {
      res.status(200).send(movie);
    } else {
      res.status(404).send("Movie not found");
    }
  }

  createMovie(req, res) {
    const { body } = req;
    const newMovie = {
      id: movies.length + 1,
      ...body,
    };
    movies.push(newMovie);
    res.status(201).send(newMovie);
  }

  updateMovie(req, res) {
    const { body } = req;
    console.log(body);
    const {
      params: { movieId },
    } = req;
    movies = movies.map((movie) => {
      if (movie.id === Number(movieId)) {
        return { ...body };
      }
      return movie;
    });
    res.status(200).send(body);
  }

  deleteMovie(req, res) {
    const {
      params: { movieId },
    } = req;
    movies = movies.filter(
      (movie) => movie.id !== Number(movieId)
    );
    res.status(200).send("Ok");
  }
}

module.exports = new MoviesControllers();
