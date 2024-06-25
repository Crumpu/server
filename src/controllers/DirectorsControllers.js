let { directors } = require("../db/db");

class DirectorsControllers {
  getDirectors(req, res) {
    res.status(200).send(directors);
  }

  getDirectorById(req, res) {
    const {
      params: { directorId },
    } = req;
    const director = directors.filter(
      (director) => director.id === Number(directorId)
    );
    if (director) {
      res.status(200).send(director);
    } else {
      res.status(404).send("Director not found");
    }
  }

  createDirector(req, res) {
    const { body } = req;
    const newDirector = {
      id: directors.length + 1,
      ...body,
    };
    directors.push(newDirector);
    res.status(201).send(newDirector);
  }

  updateDirector(req, res) {
    const { body } = req;
    console.log(body)
    const {
      params: { directorId },
    } = req;
   directors = directors.map((director) => {
      if (director.id === Number(directorId)) {
        return { ...body };
      }
      return director;
     
    });
    res.status(200).send(body)
  }

  deleteDirector(req, res) {
    const { params: { directorId } } = req;
    directors = directors.filter((director) => director.id !== Number(directorId))
    res.status(200).send("Ok")
  }
}

module.exports = new DirectorsControllers();
