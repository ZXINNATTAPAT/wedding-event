const express = require('express');
const db = require("./database.js");
const bodyParser = require('body-parser');
const UserProfile = express();
const jsonParser = bodyParser.json();

UserProfile.get("/UserProfile/:Email", (req, res) => {
    const Email = req.params.Email;
    console.log("ราคาที่ส่งมา:", Email);
    db.query("SELECT Username, PhoneNo, Email FROM `customer` WHERE Email = ?",[Email], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result); // แสดงผลลัพธ์ใน console
            res.send(result);
        }
    });
});

module.exports = UserProfile;