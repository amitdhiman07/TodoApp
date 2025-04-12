// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');

const {initializingDbStructure} =  require('../src/models/dbStructure')
const router = require('./routes/route')

// Server port
const PORT = process.env.SERVER_PORT;

// for cors (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware
app.use(express.json());

// Routing
app.use('/api' , router);


// Create Server
const server = app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await initializingDbStructure();
});
