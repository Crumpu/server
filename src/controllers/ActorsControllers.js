let {actors} = require("../db/db");


class ActorsControllers {
  getActors(req, res) {
    res.status(200).send(actors);
  }

  getActorById(req, res) {
    const {
      params: { actorId },
    } = req;
    const  actor  = actors.filter((actor) => actor.id === Number(actorId));
    if (actor) {
      res.status(200).send(actor);
    } else {
      res.status(404).send("Actor not found");
    }
  }

  createActor(req, res) {
    const { body } = req;
    const newActor = {
      id: actors.length + 1,
      ...body,
    };
    actors.push(newActor);
    res.status(201).send(newActor);
  }
  updateActor(req, res) {
    const {
      params: { actorId },
    } = req;
    const { body } = req;
    const newActors = actors.map((actor) => {
      if (actor.id === Number(actorId)) {
        return { ...body };
      }
      return actor;
    });
    actors = newActors;
    res.status(200).send(body);
  }

  deleteActor(req, res) {
    const {
      params: { actorId },
    } = req;
    actors = actors.filter((actor) => actor.id !== Number(actorId));
    res.status(200).send("Ok");
  }
}

module.exports = new ActorsControllers();
