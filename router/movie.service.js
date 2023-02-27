import { client } from "../index.js";

export async function editMovie(id, data) {
  return await client
    .db("empty")
    .collection("movie")
    .updateOne({ id: id }, { $set: data });
}
export async function newFunction_2(id) {
  return await client.db("empty").collection("movie").deleteOne({ id: id });
}
export async function newFunction_1(data) {
  return await client.db("empty").collection("movie").insertMany(data);
}
export async function getmovies() {
  return await client.db("empty").collection("movie").find({}).toArray();
}
export async function getElementById(id) {
  return await client.db("empty").collection("movie").findOne({ id: id });
}
