const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const AdminHome = express();
const jsonParser = bodyParser.json();

AdminHome.get("/Bookingdata", (req, res) => {
    db.query("SELECT booking.BookingID, booking.BrideName, booking.GroomName,venue.VenueName ,booking.BookingDateandTime, booking.EventDate, booking.EventStartTime, booking.EventEndTime, booking.NumofGuest, photographer.NumberofPH, music.Genre, status.Title FROM booking INNER JOIN venue ON booking.VenueID= venue.VenueID INNER JOIN photographer ON booking.PhotographerID = photographer.PhotographerID INNER JOIN music ON booking.MusicID = music.MusicID INNER JOIN status ON booking.StatusID = status.StatusID", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(result); // แสดงผลลัพธ์ใน console
            res.send(result);
        }
    });
});

AdminHome.get("/Venuedata", (req, res) => {
    db.query("SELECT * FROM venue", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(result); // แสดงผลลัพธ์ใน console
            res.send(result);
        }
    });
});

AdminHome.get("/Musicdata", (req, res) => {
    db.query("SELECT * FROM music", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(result); // แสดงผลลัพธ์ใน console
            res.send(result);
        }
    });
});

AdminHome.get("/photographerdata", (req, res) => {
    db.query("SELECT * FROM photographer", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result); // แสดงผลลัพธ์ใน console
            res.send(result);
        }
    });
});

AdminHome.get("/Userdata", (req, res) => {
    db.query("SELECT * FROM customer", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result); // แสดงผลลัพธ์ใน console
            res.send(result);
        }
    });
});

// AdminHome.get("/Search/:BookingID", async (req, res) => {
//     db.query("SELECT BookingID, BrideName, GroomName, BookingDateandTime, EventDate, EventStartTime, EventEndTime, NumofGuest FROM booking WHERE BookingID = ?",[req.body.BookingID], (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result); // แสดงผลลัพธ์ใน console
//             res.send(result);
//         }
//     });
// });

module.exports = AdminHome;
