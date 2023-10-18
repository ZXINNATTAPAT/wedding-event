import { useParams } from "react-router-dom"; // นำเข้า useParams จาก React Router
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TextField from "@mui/material/TextField";
import Button from 'react-bootstrap/Button';

function Payment() {
  // ใช้ useParams เพื่อรับค่าวิธีการชำระเงินจาก URL

  const { paymentMethod } = useParams();


  // กำหนดข้อมูลวิธีการชำระเงิน
  const paymentData = {
    creditCard: {
      title: "ชำระด้วยบัตรเครดิต",
      description:
        "โปรดกรอกข้อมูลบัตรเครดิตของคุณและกดปุมชำระเงินเพื่อทำการชำระเงินด้วยบัตรเครดิต.",
    },
    qrCode: {
      title: "ชำระด้วยสแกนคิวอาร์โค้ด",
      description: "สแกนคิวอาร์โค้ดด้านล่างเพื่อทำการชำระเงิน.",
    },
    bankTransfer: {
      title: "โอนผ่านบัญชีธนาคาร",
      description: "โอนเงินผ่านบัญชีธนาคารด้านล่างเพื่อทำการชำระเงิน.",
    },
  };

  const [creditCardData, setCreditCardData] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCardData({
      ...creditCardData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div style={{textAlign:"center"}}>
        <h1>{paymentData[paymentMethod].title}</h1>
        <p>{paymentData[paymentMethod].description}</p>

        {/* แสดงฟอร์มสำหรับกรอกข้อมูลบัตรเครดิต */}
        {paymentMethod === "creditCard" && (
          <div className=" d-flex justify-content-center" >
            <div className="card mb-4">
              <div className="card-body" >
                <Form
                // onSubmit={}
                >
                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Col sm="12">
                      <TextField
                        required
                        id="cardNumber"
                        name="cardNumber"
                        label="หมายเลขบัตรเครดิต"
                        fullWidth
                        autoComplete=""
                        variant="outlined"
                        value={creditCardData.cardNumber}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Col sm="12">
                      <TextField
                        required
                        label="ชื่อผู้ถือบัตร"
                        fullWidth
                        autoComplete=""
                        variant="outlined"
                        id="cardHolder"
                        name="cardHolder"
                        value={creditCardData.cardHolder}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Col sm="12">
                      <TextField
                        required
                        label="วันหมดอายุ"
                        fullWidth
                        autoComplete=""
                        variant="outlined"
                        id="expirationDate"
                        name="expirationDate"
                        value={creditCardData.expirationDate}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Col sm="12">
                      <TextField
                        required
                        label="รหัส CVV"
                        fullWidth
                        autoComplete=""
                        variant="outlined"
                        id="cvv"
                        name="cvv"
                        value={creditCardData.cvv}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        )}
                        
        {/* {paymentMethod === "creditCard" && <Button variant="contained" onClick={handlePayment}>ชำระเงิน</Button>} */}
        <Link to={`/thankyou`}>
                      <Button variant="primary">ชำระเงิน</Button>
                    </Link>
      </div>
    </>
  );
}

export default Payment;
