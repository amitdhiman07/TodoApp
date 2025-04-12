// Dependencies
const express = require('express');
const router = express.Router();

const {Task} = require('../models/dbStructure');


// Get Method
router.get('/tasks' , async (req , res) => {
    try {
        const data = await Task.findAll();
        res.json(data);
        console.log("Fetching all the data")
    } catch (error) {
        console.log("Failed to get the data " , error);
    }
});

// Post Method
router.post('/tasks' , async (req , res) => {
    try {
        const {name} = req.body;
        const data = await Task.create({name});
        res.json(data);
        console.log("Inserted the data");
    } catch (error) {
        console.error(error);
    }
})


// Patch Method
router.patch('/tasks' , async (req , res) => {
    try {
        const {id} = req.query;
        const {name} = req.body;
        const data = await Task.update({name} , {where : {id}})
        res.json(data);
        console.log(`Updated the data where ${id}`);
    } catch (error) {
        console.error(error);
    }
} )

// Delete Method
router.delete('/tasks' , async (req , res) => {
    const {id} = req.query;
    try {
        const data = await Task.destroy({where : {id}})
        res.json(data);
        console.log(`Data deleted where ${id}`);
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;


