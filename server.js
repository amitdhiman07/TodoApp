// import dependencies
const express = require('express');
require('dotenv').config();

const pool = require('./config/dbConnection')
const getAllData = require('./router/routes')

const app = express();

// Middleware
// app.use(express.json());

// Custom middleware for test
function logger( req, res , next ) {
    console.log("This is a custom middleware function")
    console.log("Request" , req.url , req.method);
    next(); // continue to the other middleware
}

app.use(logger);

// Routes
app.use('/api', getAllData());

// Server
const port = process.env.PORT;
app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});