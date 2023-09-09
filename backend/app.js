const express = require("express");
const cors = require("cors");
const app = express();
const { readdirSync, read } = require("fs");
const { db } = require("./db/db");

require("dotenv").config();

// MiddleWares
app.use(express.json());
app.use(cors());

// Routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const PORT = process.env.PORT;
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("You are listening to port ", PORT);
  });
};

server();
