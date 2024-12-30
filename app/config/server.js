const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('../routes/todoRoutes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/todos', todoRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
