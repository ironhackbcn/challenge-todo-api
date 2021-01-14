const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const publicDomain = process.env.PUBLIC_DOMAIN || 'http://localhost:3000'
//const Todo = require ("./models/todo.model")

const config = require('./config/db');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const todoRoute = require('./routes/todoRoute');
const router = require('./routes/todoRoute');  // <-- ?
const Todo = require('./models/Todo');

app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: [publicDomain]
}));

app.use('/api/v1', todoRoute);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
