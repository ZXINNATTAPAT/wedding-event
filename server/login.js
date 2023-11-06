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
        key: "userID",
        secret: "wedding-event",
        resave: false,
        saveUninitialized: false,
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

login.post("/customerregister", jsonParser, (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phoneNo = req.body.phoneno;

    bcrypt.hash(password, saltRounds, function (err, hash) {
        db.execute(
            "INSERT INTO customer (Username, Email, Password, PhoneNo) VALUE (?,?,?,?)",
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

// login.get("/customerlogin", (req, res) => {
//     if (req.session.userID) {
//         res.send({ loggedIn: true, customer: req.session.userID });
//     } else {
//         res.send({ loggedIn: false });
//     }
// });

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
                    req.session.userID = customer;
                    console.log(req.session.userID);
                    // res.redirect("/Home")
                    // res.send(customer);
                    res.json({ status: "ok", message: "login success" });
                } else {
                    res.json({ status: "error", message: "login failed" });
                }
            });
        }
    );
});

login.get("/customerlogout", (req, res) => {
    if (req.session.userID) {
        req.session.destroy((err) => {
            if (err) {
                console.error("Error destroying session:", err);
                res.json({ status: "error", message: "Logout failed" });
            } else {
                res.json({ status: "ok", message: "Logout success" });
            }
        });
    } else {
        res.json({ status: "error", message: "User is not logged in" });
    }
});



//middleware
// const isAuth = (req, res, next) => {
//     if(req.session.isAuth) {
//         next();
//     }else{
//         req.session.error = "You have to Login first";
//         res.render('/Login')
//     }
    
// }
// login.get("/Home", isAuth ,(req, res) => {
//     res.render("Home")
// })


// login.get("/", NotLoggedIn, (req,res, next) => {
//     db.execute("SELECT Username FROM customer WHERE CustomerID = ?", [req.session.userID])
//     .then(([rows]) => {
//         res.render(" ", {
//             Username: rows[0].Username
//         })
//     })
// })


//Admin
// login.get("/adminlogin", (req, res) => {
//     if (req.session.userID) {
//         res.send({ loggedIn: true, customer: req.session.userID });
//     } else {
//         res.send({ loggedIn: false });
//     }
// });

// login.post("/adminregister", jsonParser, (req, res, next) => {
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
//     const phoneNo = req.body.phoneno;
//     console.log(username)
//     console.log(email)
//     console.log(password)
//     console.log(phoneNo)

//     bcrypt.hash(password, saltRounds, function (err, hash) {
//         db.execute(
//             "INSERT INTO admin (AdminName, AdminEmail, AdminPassword, AdminPhoneNo) VALUE (?,?,?,?)",
//             [username, email, hash, phoneNo],
//             function (err, results, fields) {
//                 if (err) {
//                     res.json({ status: "error", message: err });
//                     return;
//                 }
//                 res.json({ status: "ok" });
//             }
//         );
//     });
// });

// login.post("/adminlogin", jsonParser, function (req, res, next) {
//     const email = req.body.email;
//     const password = req.body.password;

//     db.execute(
//         "SELECT * FROM admin WHERE AdminEmail = ?",
//         [email],
//         function (err, admin, fields) {
//             if (err) {
//                 res.json({ status: "error", message: "failed" });
//                 return;
//             }
//             if (admin.length == 0) {
//                 res.json({ status: "error", message: "no user found" });
//                 return;
//             }
//             bcrypt.compare(password, admin[0].AdminPassword, function (err, isLogin) {
//                 if (isLogin) {
//                     req.session.userID = admin;
//                     console.log(req.session.userID);
//                     // res.send(admin);
//                     res.json({ status: "ok", message: "login success" });
//                 } else {
//                     res.json({ status: "error", message: "login failed" });
//                 }
//             });
//         }
//     );
// });

module.exports = login;
