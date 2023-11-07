const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const UserProfile = express();
const jsonParser = bodyParser.json();

UserProfile.post("/UserProfile/:CustomerID", (req, res) => {
    const CustomerID = req.params.CustomerID;
    console.log("ราคาที่ส่งมา:", CustomerID);
    db.query("SELECT Username, PhoneNo, Email FROM `customer` WHERE CustomerID = ?",[CustomerID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result); // แสดงผลลัพธ์ใน console
            res.send(result);
        }
    });
});

module.exports = UserProfile;