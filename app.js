const express = require('express');
const connectDB = require('./app/config/db');
const app = require('./app/config/server');

// Connect to Database
connectDB();

module.exports = app;
