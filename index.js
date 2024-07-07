const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO APP
const todoRoutes = require("./routes/todos");

// mount the todo routes
app.use("/api/v1", todoRoutes);

// starting the server
app.listen(PORT, (res, req) => {
  console.log(`server started at port ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
  res.send("<h1>Home Page!!</h1>");
});
