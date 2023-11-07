const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require("./database");
// import EditProflie from '../client/src/components/EditProflie/EditProflie';
// import Home from './'

const login = require("./login.js");
const Venue = require("./Venue.js");
const editUser = require("./editUser.js");
const Payment = require("./Payment.js");
const AdminHome = require("./AdminHome.js");
const Review = require("./Review.js");
const ShowReview = require("./ShowReview.js");
const Filter = require("./Filter.js");
const UserProfile = require('./UserProfile');


// const { default: EditProflie } = require('../client/src/components/EditProflie/EditProflie');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.get("/Venue", (req, res) => {
//     res.send()
// })

app.listen(5000, ()=>{
    console.log(`Server is running on port 5000`)
});

//test
// app.get("/api", (req, res) => {
//     res.json({"user": ["userone","usertwo"]});
// })

// app.get("/admin",(req, res)=>{
//     db.query("SELECT * FROM admin", (err, result)=> {
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })

app.use("/", login);
app.use("/", Venue);
app.use("/", editUser);
app.use("/", Payment);
app.use("/", AdminHome);
app.use("/", Review);
app.use("/", ShowReview);
app.use("/", Filter);
app.use("/", UserProfile);


// app.get('/', editUser ,(req, res) => {
//     res.send(EditProflie.EditProflie());
// })