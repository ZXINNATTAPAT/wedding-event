const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const login = express();
const jsonParser = bodyParser.json();
login.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));

login.use(cookieParser());
login.use(bodyParser.urlencoded({ extended: true }));

login.use(session(
    {
        key: "customerID",
        secret: "wedding-event",
        resave: false,
        saveUninitailized: false,
        cookie: {
            expires: 3600 * 24,
        }
    }
))

login.get("/customer", (req, res) => {
    db.query("SELECT * FROM customer", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

login.post("/register", jsonParser, (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phoneNo = req.body.phoneNo;

    bcrypt.hash(password, saltRounds, function (err, hash) {
        db.execute(
            "INSERT INTO customer (Username, Email, password, PhoneNo) VALUE (?,?,?,?)",
            [username, email, hash, phoneNo],
            function (err, results, fields) {
                if (err) {
                    res.json({ status: "error", message: err });
                    return;
                }
                res.json({ status: "ok" });
            }
        );
    });
});

login.post("/customerlogin", jsonParser, function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    db.execute(
        "SELECT * FROM customer WHERE Email = ?",
        [email],
        function (err, customer, fields) {
            if (err) {
                res.json({ status: "error", message: "failed" });
                return;
            }
            if (customer.length == 0) {
                res.json({ status: "error", message: "no user found" });
                return;
            }
            bcrypt.compare(password, customer[0].Password, function (err, isLogin) {
                if (isLogin) {
                    req.session.customer = customer;
                    console.log(req.session.customer);
                    res.json({ status: "ok", message: "login success" });
                } else {
                    res.json({ status: "error", message: "login failed" });
                }
            });
        }
    );
});

module.exports = login;
