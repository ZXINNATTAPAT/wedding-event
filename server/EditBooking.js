const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const EditBooking = express();
const jsonParser = bodyParser.json();

EditBooking.get('/getbookingdetail', (req, res) => {
    const CustomerID = req.body.CustomerID;
    db.query('SELECT venue.VenueName, booking.EventDate, booking.EventStartTime, photographer.NumberofPH FROM booking INNER JOIN venue ON booking.VenueID = venue.VenueID INNER JOIN status ON booking.StatusID = status.StatusID INNER JOIN photographer ON photographer.PhotographerID = booking.PhotographerID',

        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(results);
            }
        })
})

module.exports = EditBooking;
