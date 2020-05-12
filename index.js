const express = require('express');
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser');
const validator = require('validator');
const jwtToken = require('jsonwebtoken');
const mongoose = require('mongoose');


const port = process.env.PORT || 3000;
const app = new express();

const db = require('./setup/mongo').mongoURL;


mongoose.connect(db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to database"))
    .catch((err) => console.log(err));
//Get Route

app.get('/', (req, res) => {
    res.send({
        message: 'Success'
    })
})




app.listen(port, () => console.log(`App is listening to ${port}`));