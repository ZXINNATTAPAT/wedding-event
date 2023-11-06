const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const Review = express();
const jsonParser = bodyParser.json();

Review.post("/Review", (req, res) => {
    db.query("INSERT INTO `review` (ReviewNo, ReviewDateandTime, BookingID, Score, Description) VALUES (?, ?, ?, ?, ?)",[req.body.ReviewNo, req.body.ReviewDateandTime, req.body.BookingID, req.body.Score, req.body.Description], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result); // แสดงผลลัพธ์ใน console
            res.send(result);
        }
    });
});

module.exports = Review;
