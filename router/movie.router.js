import express from "express";
import {
  getmovies,
  getElementById,
  newFunction_1,
  newFunction_2,
  editMovie,
} from "./movie.service.js";

const router = express.Router();

router.get("/", async function (request, response) {
  // const { id } = request.params;
  const movie = await getmovies();
  response.send(movie);
});
router.get("/:id", async function (request, response) {
  const { id } = request.params;
  const movie = await getElementById(id);
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "not found" });
  // response.send(movie?movie:false);
});
router.post("/", async function (request, response) {
  const data = request.body;
  const result = await newFunction_1(data);
  response.send(movies);
});
// delete movies from id
router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  const movie = await newFunction_2(id);
  movie.deletedCount >= 1
    ? response.send({ message: "movie deleted" })
    : response.status(404).send({ message: "not found" });
  // response.send(movie?movie:false);
});
// update the movie
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  const movie = await editMovie(id, data);
  response.send(movie);
  // movie
  //   ? response.send(movie)
  //   : response.status(404).send({ message: "not found" });
  // response.send(movie?movie:false);
});
export default router;
