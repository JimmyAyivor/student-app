const express = require('express');
const app = express();

const studentsController = require('./controllers/studentsController')

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Service is running' });
});

app.use('/students', studentsController)

module.exports = app;
