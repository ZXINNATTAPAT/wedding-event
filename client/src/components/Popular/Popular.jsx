import React from 'react'
import './popular.css'
import {BsArrowLeftShort} from "react-icons/bs"
import {BsArrowRightShort} from "react-icons/bs"
import img1 from '../../assets/room1.png'
import img2 from '../../assets/room2.png'
import img3 from '../../assets/room3.png'
import img4 from '../../assets/room4.png'
import { Link } from 'react-router-dom';

const Data = [
    {
        id:1,
        imgSrc:img1,
        roomNo:1,
        price:15000,
        num:50
    },
    {
        id:2,
        imgSrc:img2,
        roomNo:2,
        price:17000,
        num:60
    },
    {
        id:3,
        imgSrc:img3,
        roomNo:3,
        price:20000,
        num:70
    },
    {
        id:4,
        imgSrc:img4,
        roomNo:4,
        price:18000,
        num:40
    }
]

const Popular = () => {
    return(
       <section className='popular section container'>
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            สถานที่แนะนำ
                        </h2>
                    </div>

                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className='icon'/>
                        <BsArrowRightShort  className='icon'/>
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                         Data.map(({imgSrc,roomNo,price,num,id}) =>{
                            return(
                                <div className="place" key={id}>
                                    <div className="placeImage">
                                        <img src={imgSrc} alt="Image title" />
                                    </div>

                                    <div className="Info"> 
                                        <div className="textInfo">
                                            <h2>ห้อง {roomNo}</h2>
                                            <p>ราคา ฿ {price}</p>
                                            <p>จำนวนคน {num} คน</p>
                                        </div>
                                        <button className='btn'>
                                            <Link to={`/roomdetail/${id}`}>รายละเอียดเพิ่มเติม</Link>
                                        </button>
                                    </div>                           
                                </div>
                            )
                         })
                    }
                </div>
            </div>
       </section>
    )
}

export default Popular
