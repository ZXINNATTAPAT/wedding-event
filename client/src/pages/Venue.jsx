import { useState } from "react";
import "../components/Pagination/Pagination.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../assets/room1.png";
import img2 from "../assets/room2.png";
import img3 from "../assets/room3.png";
import img4 from "../assets/room4.png";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination/Paginations.jsx";
import NavbarUser from "../components/Navbar-user/NavbarUser";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    roomNo: 1,
    price: 15000,
    num: 50,
  },
  {
    id: 2,
    imgSrc: img2,
    roomNo: 2,
    price: 17000,
    num: 60,
  },
  {
    id: 3,
    imgSrc: img3,
    roomNo: 3,
    price: 20000,
    num: 70,
  },
  {
    id: 4,
    imgSrc: img4,
    roomNo: 4,
    price: 18000,
    num: 40,
  },
  {
    id: 5,
    imgSrc: img1,
    roomNo: 5,
    price: 15000,
    num: 50,
  },
  {
    id: 6,
    imgSrc: img2,
    roomNo: 6,
    price: 17000,
    num: 60,
  },
  {
    id: 7,
    imgSrc: img3,
    roomNo: 7,
    price: 20000,
    num: 70,
  },
  {
    id: 8,
    imgSrc: img4,
    roomNo: 8,
    price: 18000,
    num: 40,
  },
  {
    id: 9,
    imgSrc: img1,
    roomNo: 9,
    price: 15000,
    num: 50,
  },
  {
    id: 10,
    imgSrc: img2,
    roomNo: 10,
    price: 17000,
    num: 60,
  },
  {
    id:11,
    imgSrc: img3,
    roomNo: 11,
    price: 20000,
    num: 70,
  },
  {
    id: 12,
    imgSrc: img4,
    roomNo: 12,
    price: 18000,
    num: 40,
  },
];

const Popular = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = Data.slice(firstPostIndex, lastPostIndex);
  return (
    <>
    <NavbarUser/>
    <br />
    <br />
    <br />
      <section className="popular section container">
        <div className="secContainer">
          <div className="secHeader flex">
            <div className="textDiv">
              <h2 className="secTitle">สถานที่จัดงาน</h2>
            </div>
           
          </div>

          <div className="mainContent grid">
            {currentPosts.map(({ imgSrc, roomNo, price, num, id }) => {
              return (
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
                    <button className="btn">
                      <Link to={`/roomdetail/${id}`}>รายละเอียดเพิ่มเติม</Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Pagination
        totalPosts={Data.length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Popular;
