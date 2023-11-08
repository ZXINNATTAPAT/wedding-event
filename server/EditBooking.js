const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const EditBooking = express();
const jsonParser = bodyParser.json();

EditBooking.get('/getbookingdetail', (req, res) => {
    const BookingID = req.body.BookingID;
    db.query('SELECT venue.VenueName, booking.EventDate, booking.EventStartTime, booking.NumofGuest, photographer.NumberofPH, music.Genre FROM booking INNER JOIN venue ON booking.VenueID = venue.VenueID INNER JOIN status ON booking.StatusID = status.StatusID INNER JOIN photographer ON photographer.PhotographerID = booking.PhotographerID INNER JOIN music ON music.MusicID =booking.MusicID WHERE BookingID = ?',
        [BookingID],
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
