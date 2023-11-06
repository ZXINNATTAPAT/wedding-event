import Navbar from "../Navbar/Navbar";
import React, { useState } from 'react';
import axios from 'axios';
import './home.css';
// import Popular from '../Popular/popular';
import { Link } from 'react-router-dom'

const Home = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState('');

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  }

  const searchAndFilterData = () => {
    // สร้างข้อมูลที่จะส่งไปยัง Express.js
    const requestData = {
      Price: price,
      Capacity: capacity,
    };

    // ส่งข้อมูลไปยัง Express.js โดยใช้ fetch
    axios.get('http://localhost:5000/Filter', { params: requestData })
      .then((response) => {
        // ทำอะไรกับผลลัพธ์ที่คุณได้รับจาก Express.js
        console.log('ผลลัพธ์ที่ค้นพบ:', response.data);
      })
      .catch((error) => {
        console.error('เกิดข้อผิดพลาดในการส่งคำขอ:', error);
      });
  }

  return (
        <>
        <Navbar/>
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Plan your wedding with us
          </h1>
          <p className="subTitle">
            รวมสถานที่จัดงานแต่งงานและงานอีเว้นท์ครบวงจร
          </p>
        </div>

        <div className="homeCard grid">
          <div className="PriceDiv">
            <input
              className='homeInput'
              type='text'
              placeholder='  ราคา'
              value={price}
              onChange={handlePriceChange}
            />
          </div>

          <div className="NumDiv">
            <input
              className='homeInput'
              type='text'
              placeholder='  จำนวนคน'
              value={capacity}
              onChange={handleCapacityChange}
            />
          </div>

          {/* <button className='btn' onClick={searchAndFilterData}>ค้นหา</button> */}
          {/* <Link to=''><button className='btn' onClick={searchAndFilterData}>ค้นหา</button></Link> */}
          <button className='btn' onClick={() => searchAndFilterData()}>ค้นหา</button>
          {/* <Link to='/Filter'><button className='btn'>ค้นหา</button></Link> */}

      </div>
      <div>
        {filteredResults.map((result) => (
          <div key={result.id}>
            <p>ราคา: {result.VenuePrice}</p>
            <p>จำนวนคน: {result.MaxCapacity}</p>
            {/* แสดงข้อมูลอื่น ๆ ตามความต้องการ */}
          </div>
        ))}
        </div>
      </div>
    </section>
        </>
  );
}

export default Home;

