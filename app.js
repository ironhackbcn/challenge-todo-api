require("dotenv").config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const publicDomain = process.env.PUBLIC_DOMAIN || 'http://localhost:3000'

const config = require('./config/db');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const authRouter = require("./routes/auth");
const todoRoute = require('./routes/todoRoute');

app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: [publicDomain]
}));

app.use("/auth", authRouter);
app.use('/api/v1', todoRoute);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
