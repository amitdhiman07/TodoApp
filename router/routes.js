// import dependencies
const express = require('express');
const router = express.Router();




function getAllData(){
   router.get( '/get' ,  (req , res) => {
        res.send("get method");
    });
    return router;
}




module.exports = getAllData;