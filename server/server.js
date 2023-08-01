const express = require('express');
const cors = require('cors');

const app = express();


require('dotenv').config();

app.use(express.json());

app.use(cors());


const trains = require('./routes/train')

app.use('/train', trains);
app.get('/',(req,res)=>{
    res.status(200).send("Welcome to John Doe Railway Server")
})

// console.log(process.env.PORT);
app.listen(process.env.PORT,()=>{
    console.log(`Server running on Port: ${process.env.PORT}`);
})