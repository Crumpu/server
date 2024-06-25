const fs = require("fs");
const path = require("path");
const express = require("express");
// ================================
const app = express();
//

app.use(express.json());
const homePage = path.resolve('index.html')
console.log(homePage)
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
app.get("/actors", () => {});
app.get("/actors/:actorId", () => {});
app.post("/actors", () => {});
app.put("/actors/:actorId", () => {});
app.delete("/actors/:actorId", () => {});

// studios controllers
app.get("/studios", () => {});
app.get("/studios/:studioId", () => {});
app.post("/studios", () => {});
app.put("/studios/:studioId", () => {});
app.delete("/studios/:studioId", () => {});

// movie controllers
app.get("/movies", () => {});
app.get("/movies/:movieId", () => {});
app.post("/movies", () => {});
app.put("/movies/:movieId", () => {});
app.delete("/movies/:movieId", () => {});

// director controllers
app.get("/directors", () => {});
app.get("/directors/:directorId", () => {});
app.post("/directors", () => {});
app.put("/directors/:directorId", () => {});
app.delete("/directors/:directorId", () => {});

module.exports = app;
