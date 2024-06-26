let { studios } = require("../db/db");

class StudiosControllers {
  getStudios(req, res) {
    res.status(200).send(studios);
  }

  getStudioById(req, res) {
    const {
      params: { studioId },
    } = req;
    const [studio] = studios.filter((studio) => studio.id === Number(studioId));
    if (studio) {
      res.status(200).send(studio);
    } else {
      res.status(404).send("Studio not found");
    }
  }

  createStudio(req, res) {
    const { body } = req;
    const newStudio = {
      id: studios.length + 1,
      ...body,
    };
    studios.push(newStudio);
    res.status(201).send(newStudio);
  }

  updateStudio(req, res) {
    const { body } = req;
    console.log(body);
    const {
      params: { studioId },
    } = req;
    studios = studios.map((studio) => {
      if (studio.id === Number(studioId)) {
        return { ...body };
      }
      return studio;
    });
    res.status(200).send(body);
  }

  deleteStudio(req, res) {
    const {
      params: { studioId },
    } = req;
    studios = studios.filter((studio) => studio.id !== Number(studioId));
    res.status(200).send("Ok");
  }
}

module.exports = new StudiosControllers();
