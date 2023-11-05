import { Link } from 'react-router-dom';
import './roomdetail.css'
import NavbarUser from '../Navbar-user/NavbarUser'
import img1 from '../../assets/room1.png'
import img2 from '../../assets/room2.png'
import img3 from '../../assets/room3.png'
import img4 from '../../assets/room4.png'
import { useParams } from 'react-router-dom'
import { BsPeopleFill } from "react-icons/bs"
import { IoMdCheckmark } from "react-icons/io"
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"

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

const Roomdetail = () => {
    const { roomId } = useParams();
    const roomData = Data.find((room) => room.id.toString() === roomId);

    if (!roomData) {
        return <div>Room not found</div>;
    }

    return (
        <>
            <NavbarUser />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img className='roompic' src={roomData.imgSrc} alt="Room Image" />
            <div className='detail1'>
                <h2>{`ห้อง ${roomData.roomNo}`}</h2>
                <p>{`ราคา ฿ ${roomData.price}`}</p>
                <p><BsPeopleFill /> {roomData.num} คน</p>
                <p>{`พื้นที่ขนาด ${roomData.size} ตารางเมตร`}</p>
            </div>
            <div className='detail2'>
                <div className='detail2text'>
                    <h3>สิ่งอำนวยความสะดวก</h3>
                    <p><IoMdCheckmark />ไวไฟ</p>
                    <p><IoMdCheckmark />เวที</p>
                    <p><IoMdCheckmark />โพเดียม</p>
                    <p><IoMdCheckmark />ลำโพง</p>
                    <p><IoMdCheckmark />โปรเจคเตอร์</p>
                    <p><IoMdCheckmark />มีอาหารและเครื่องดื่มบริการ</p>
                </div>

            </div>
            <Link to="/booking" ><button className='chooseroom'>เลือก</button></Link>
            <div className="reviews">
                <h2>Reveiws</h2>
                <div className='box-container'>
                    <div className="box">
                        <div className="box-top">
                            <div className="name-user">
                                <strong>Emily Ja</strong>
                            </div>
                            <div className="stars">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                        </div>
                        <div className="comment">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure labore, minus rerum veniam reprehenderit exercitationem perspiciatis ut quos ipsam.</p>
                        </div>
                    </div>
                </div>

                <div className='box-container'>
                    <div className="box">
                        <div className="box-top">
                            <div className="name-user">
                                <strong>Joseph Ba</strong>
                            </div>
                            <div className="stars">
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </div>
                        </div>
                        <div className="comment">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem temporibus aliquam tenetur commodi ab blanditiis vel nulla in. Sunt cum in voluptatem maiores ut ab eligendi quis ipsum perferendis esse corrupti repellendus, laboriosam doloribus.</p>
                        </div>
                    </div>
                </div>

                <div className='box-container'>
                    <div className="box">
                        <div className="box-top">
                            <div className="name-user">
                                <strong>Nana Ka</strong>
                            </div>
                            <div className="stars">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </div>
                        </div>
                        <div className="comment">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore architecto recusandae labore sit tempore nobis totam sunt expedita. Rerum iusto mollitia voluptatem, maxime omnis placeat ratione aut maiores possimus, sapiente eveniet harum provident fugit impedit quae magni! Mollitia cumque assumenda adipisci est explicabo atque nulla reiciendis quam autem ducimus!</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="user-reviews">
                 <h2>Comment</h2>
                 <div className="text-comment">
                    <textarea className="form-control" rows="4"></textarea>
                    <button className='chooseroom'>รีวิว</button>
                 </div>
            </div>



        </>
    )
}


export default Roomdetail

