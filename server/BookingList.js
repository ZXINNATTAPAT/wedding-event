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

bookingList.post('/cancelbooking', jsonParser, (req, res) => {
    const email = req.body.Email; // Assuming you send the customer's email in the request body

    // First, select CustomerID from the customer table based on the provided email
    db.query(
        'SELECT CustomerID FROM customer WHERE Email = ?',
        [email],
        function (err, results, fields) {
            if (err) {
                console.log(err);
                res.status(500).send('Error selecting CustomerID');
            } else if (results.length === 0) {
                res.status(404).send('Customer not found'); // Handle the case where the email doesn't match any customer
            } else {
                // Assuming you have a single customer with the provided email, results[0].CustomerID contains the CustomerID
                const CustomerID = results[0].CustomerID;

                // Now you can update the booking with the selected CustomerID
                db.query(
                    'UPDATE booking SET StatusID = 4 WHERE CustomerID = ?',
                    [CustomerID],
                    function (err, results, fields) {
                        if (err) {
                            console.log(err);
                            res.status(500).send('Error canceling booking');
                        } else {
                            // Canceled successfully
                            res.send(results);
                        }
                    }
                );
            }
        }
    );
});


module.exports = bookingList;