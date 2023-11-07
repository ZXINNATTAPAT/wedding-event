const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const bookingList = express();
const jsonParser = bodyParser.json();

bookingList.get('/getbookingList', (req, res) => {
    const CustomerID = req.body.CustomerID;
    db.query('SELECT BookingID, BrideName, EventDate, venue.VenueName, status.Title FROM booking INNER JOIN venue ON booking.VenueID = venue.VenueID INNER JOIN status ON booking.StatusID = status.StatusID  ',
    
    function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(results);
        }
    })
})
//put where inside

bookingList.post('/cancelbooking', jsonParser, (req,res) => {
    const CustomerID = req.body.CustomerID;
    db.query('UPDATE booking SET StatusID = 4 WHERE CustomerID = ?',
    [CustomerID],
    function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(results);
        }
    })
})

module.exports = bookingList;