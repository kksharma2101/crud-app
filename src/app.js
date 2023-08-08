require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectToDb = require("../config/db.js");

const app = express();
// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// connect routers
const userRouter = require("../routes/userRoutes.js");

app.use("/", userRouter);

//connect database
connectToDb();

module.exports = app;
