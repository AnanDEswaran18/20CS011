const express = require("express");
var trains = express.Router();

trains.get('/',()=>{

})


trains.post('/register',()=>{

})

trains.post('/auth', () => {

})


trains.get('/trains', () => {
    
})

trains.get('/trains/:trainNumber', (req,res) => {
    const trainnumber = req.params.trainNumber;
})


module.exports = trains;