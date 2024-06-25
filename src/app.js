const fs = require("fs");
const path = require("path");
const express = require("express");
// ================================
const app = express();
// ================================
const ActorsControllers = require('./controllers/ActorsControllers');
const DirectorsControllers = require("./controllers/DirectorsControllers");
const MoviesControllers = require('./controllers/MoviesControllers')
const StudiosControllers = require("./controllers/StudiosControllers");

// ================================

app.use(express.json());

// Home page
app.get("/", (req, res) => {
  fs.readFile(path.resolve("index.html"), (err, data) => {
    if (err) {
      res.status(404);
      throw err;
    }
    res.set("Content-Type", "text/html; charset=utf-8").send(data);
  });
});

// actors controllers
app.get("/actors", ActorsControllers.getActors);
app.get('/actors/:actorId', ActorsControllers.getActorById)
app.post("/actors", ActorsControllers.createActor);
app.put("/actors/:actorId", ActorsControllers.updateActor);
app.delete("/actors/:actorId", ActorsControllers.deleteActor);

// studios controllers
app.get("/studios", StudiosControllers.getStudios);
app.get("/studios/:studioId", StudiosControllers.getStudioById);
app.post("/studios", StudiosControllers.createStudio);
app.put("/studios/:studioId", StudiosControllers.updateStudio);
app.delete("/studios/:studioId", StudiosControllers.deleteStudio);

// movie controllers
app.get("/movies", MoviesControllers.getMovies);
app.get("/movies/:movieId", MoviesControllers.getMovieById);
app.post("/movies", MoviesControllers.createMovie);
app.put("/movies/:movieId", MoviesControllers.updateMovie);
app.delete("/movies/:movieId", MoviesControllers.deleteMovie);

// director controllers
app.get("/directors", DirectorsControllers.getDirectors);
app.get("/directors/:directorId", DirectorsControllers.getDirectorById);
app.post("/directors", DirectorsControllers.createDirector);
app.put("/directors/:directorId", DirectorsControllers.updateDirector);
app.delete("/directors/:directorId", DirectorsControllers.deleteDirector);

module.exports = app;
