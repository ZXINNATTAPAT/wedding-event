const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const UserProfile = express();
const jsonParser = bodyParser.json();

UserProfile.get("/UserProfile", (req, res) => {
    db.query("SELECT * FROM `customer` WHERE CustomerID = ?",[req.body.CustomerID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result); // แสดงผลลัพธ์ใน console
            res.send(result);
        }
    });
});

module.exports = UserProfile;