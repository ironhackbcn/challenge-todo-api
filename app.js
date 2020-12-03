const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
const publicDomain = process.env.PUBLIC_DOMAIN || "http://localhost:3000";

const config = require("./config/db");

const app = express();

mongoose.Promise = global.Promise;
mongoose
  // Added parameters to solve warnings on console.
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("Database is connected 🎉");
    },
    (err) => {
      console.log("Can not connect to the database" + err);
    }
  );

// Added to solve warnings on console.
mongoose.set("useFindAndModify", false);

const todoRoute = require("./routes/todoRoute");

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: [publicDomain],
  })
);

app.use("/api/v1", todoRoute);

const server = app.listen(port, function () {
  console.log("Listening on port " + port + "💻");
});
