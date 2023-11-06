const express = require("express");
const db = require("./database.js");
const Venue = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jsonParser = bodyParser.json();
Venue.use(cors());

Venue.post("/Filter", jsonParser, (req, res) => {
  const Price = req.body.Price;
  const Capacity = req.body.Capacity;
  console.log("ราคาที่ส่งมา:", Price);
  console.log("จำนวนคนที่ส่งมา:", Capacity);
  function searchAndFilterData(Price, Capacity, data) {
    const filteredData = data.filter((item) => {
      // กรองตามราคา
      const filterByPrice = !Price || item.VenuePrice === Price;

      // กรองตามจำนวนคน
      const filterByCapacity = !Capacity || item.MaxCapacity === Capacity;

      return filterByPrice && filterByCapacity;
    });
    return filteredData;
  }

  db.execute("SELECT * FROM venue WHERE VenuePrice = ? AND MaxCapacity = ?",[Price,Capacity], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("เกิดข้อผิดพลาดในการดึงข้อมูล");
    } else {
      const filteredResults = searchAndFilterData(Price, Capacity, result);
      console.log("ผลลัพธ์ที่ค้นพบ:");
      console.log(filteredResults);
      res.json(filteredResults);
      res.json({status:"OK"})
    }
  });
});

module.exports = Venue;
