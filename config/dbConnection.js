//import dependencies
const {Client} = require('pg');


// create the pool
const pool = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT

});

// Create connection
pool.connect( (error) => {
    if (error) {
        console.error('connection error', error.stack)
    }
    console.log('connected to database');
});

module.exports = {pool};