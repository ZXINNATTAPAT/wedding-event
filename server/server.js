const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require("./database");

const login = require("./login.js");

const app = express();
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(5000, ()=>{
    console.log(`Server is running on port 5000`)
});

//test
// app.get("/api", (req, res) => {
//     res.json({"user": ["userone","usertwo"]});
// })

app.get("/admin",(req, res)=>{
    db.query("SELECT * FROM admin", (err, result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.use("/", login);