
// const express = require("express");
// const server = express();
// const router = require("./routes/index");
// const cors = require("cors");
// const morgan = require("morgan");

// server.use(cors());
// server.use(morgan("dev"));
// server.use(express.json());
// server.use("/rickandmorty", router);

const server = require("./app");
const PORT = 3001;
server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
