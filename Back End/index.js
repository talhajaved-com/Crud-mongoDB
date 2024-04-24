// const express = require('express')
// const colors = require('colors')
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import dbConnection from "./database/db.js";
import User from "./database/User.js";
import cors from "cors";

// Rest Object
const app = express();
// .env initialize // it treat as function
dotenv.config();

// clear cors
app.use(cors());

// // CRUD
// app.get() //read
// app.post() //Create
// app.put() //update
// app.delete() //delete
// Db Conecting
dbConnection();

app.use(express.json());

app.post("/register", async (req, res) => {
  let data = new User(req.body);
  let result = await data.save();
  res.send(result);
});

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(
    `Server Startted on Port ${port} in ${process.env.App_Mode} Mode`.bgBlue
  );
});
