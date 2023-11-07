const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const booking = express();
const jsonParser = bodyParser.json();

booking.post('/createbooking', jsonParser,(req, res) => {
    const BrideName = req.body.BrideName;
    const GroomName = req.body.GroomName;
    const BookingDateandTime = req.body.BookingDateandTime;
    const EventDate = req.body.EventDate;
    const EventStartTime = req.body.EventStartTime;
    const EventEndTime = req.body.EventEndTime;
    const NumofGuest = req.body.NumofGuest;
    const CustomerID = req.body.CustomerID;
    const VenueID = req.body.VenueID;
    const MusicID = req.body.MusicID;
    const PhotographerID = req.body.PhotographerID;

    db.query('INSERT INTO booking (BrideName, GroomName, BookingDateandTime, EventDate, EventStartTime, EventEndTime, NumofGuest, CustomerID, VenueID, MusicID, PhotographerID) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [BrideName, GroomName, BookingDateandTime, EventDate, EventStartTime, EventEndTime, NumofGuest, CustomerID, VenueID, MusicID, PhotographerID],
    function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

booking.post('/updatebooking',jsonParser, (req,res) => {
    const BrideName = req.body.BrideName;
    const GroomName = req.body.GroomName;
    const BookingDateandTime = req.body.BookingDateandTime;
    const EventDate = req.body.EventDate;
    const EventStartTime = req.body.EventStartTime;
    const EventEndTime = req.body.EventEndTime;
    const NumofGuest = req.body.NumofGuest;
    const CustomerID = req.body.CustomerID;
    const VenueID = req.body.VenueID;
    const MusicID = req.body.MusicID;
    const PhotographerID = req.body.PhotographerID;

    db.query('UPDATE booking SET BrideName = ?, GroomName = ?, BookingDateandTime = ?, EventDate = ?, EventStartTime = ?, EventEndTime = ?, NumofGuest = ?, VenueID = ?, MusicID = ?, PhotographerID = ? WHERE CustomerID = ?',
    [BrideName, GroomName, BookingDateandTime, EventDate, EventStartTime, EventEndTime, NumofGuest, CustomerID, VenueID, MusicID, PhotographerID],
    function (err, results, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

module.exports = booking;