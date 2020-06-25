const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const { mongoDbUrl } = require('./config/database');

mongoose.Promise = global.Promise;

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost:27017/exercise', { useNewUrlParser: true, useUnifiedTopology: true }).then(db => {
    console.log('MONGO conected');
}).catch(error => console.log("COULD NOT CONNECT" + error));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});