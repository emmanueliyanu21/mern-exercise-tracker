const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true }).then(db => {
    console.log('MONGO conected');
}).
    catch(error => handleError(error));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});