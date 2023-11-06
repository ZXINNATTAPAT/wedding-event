const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const booking = express();
const jsonParser = bodyParser.json();

booking.get('/getmusic', (req, res) => {
    db.query('SELECT * FROM music', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

booking.get('/getphotographer' ,(req, res) => {
    db.query('SELECT * FROM photographer', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

booking.get('/getbooking', (req, res) => {
    db.query('SELECT * FROM booking', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

module.exports = booking;