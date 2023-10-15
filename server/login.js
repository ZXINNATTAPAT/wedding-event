const express = require("express");
const db = require("./database.js");
const login = express();

login.get("/customer",(req, res)=>{
    db.query("SELECT * FROM customer", (err, result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
module.exports = login;