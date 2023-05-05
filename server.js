// const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

mongoose.connect('mongodb://localhost/cludops-challenge')
  .then(() => console.log("MongoDb connected !!!"))
  .catch(() => console.log("MongoDb connection Failed !!!"));

app.use(express.json());
app.use('/api', userRoutes);

app.listen(3000, () => console.log("Listning on port: 3000"));

