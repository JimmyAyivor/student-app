const express = require('express');
const app = express();
const cors = require('cors');
const studentsController = require('./controllers/studentsController')

app.use(express.json());
app.use(cors())
app.get('/', (request, response) => {
  response.json({ message: 'Service is running' });
});

app.use('/students', studentsController)

module.exports = app;
