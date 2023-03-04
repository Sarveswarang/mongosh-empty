import express from "express";
import bcrypt from "bcrypt";



import { createuser } from "../router/users.service.js";
// import {
  
//   createuser
  
// } from "./users.service.js";

const router = express.Router();
async function generateHasedPassword(password) {
  const NO_OF_ROUNDS=10;
const salt= await bcrypt.genSalt(NO_OF_ROUNDS)
const hashedPassword= await bcrypt.hash(password,salt)
 console.log(hashedPassword);
 console.log(salt);
 return hashedPassword;
}
router.post("/signup",async function(request,response) {
  const{username,password}=request.body;
  const hashedPassword= await generateHasedPassword(password);
  const result= await createuser({
    username: username,
    password: hashedPassword,
  });
  response.send(result);
});

// router.post("/signup", async function (request, response) {
//   const data = request.body;
//   console.log(data);
//   const result = await createuser(data);
//   response.send(result);
// });


export default router;
