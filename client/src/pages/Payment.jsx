import { useParams } from "react-router-dom"; // นำเข้า useParams จาก React Router
import { Link } from "react-router-dom";
import qrcode from "../assets/qrcode.jpg";
import NavbarUser from "../components/Navbar-user/NavbarUser";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

function Payment() {
  // ใช้ useParams เพื่อรับค่าวิธีการชำระเงินจาก URL

  const { paymentMethod } = useParams();
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    // Make an HTTP request to fetch payment methods from the backend
    // Replace 'backendEndpoint' with the actual URL of your backend API
    axios
      .get("http://localhost:5000/PaymentMethod")
      .then((response) => {
        setPaymentData(response.data);
      })
      .catch((error) => console.error("Error fetching payment data: ", error));
  }, [paymentMethod]);

  const selectedPayment = paymentData.find(
    (method) => method.MethodNo === parseInt(paymentMethod)
  );


  // กำหนดข้อมูลวิธีการชำระเงิน
  // const paymentData = {
  //   qrCode: {
  //     title: "ชำระด้วยสแกนคิวอาร์โค้ด",
  //     description: "สแกนคิวอาร์โค้ดด้านล่างเพื่อทำการชำระเงิน.",
  //   },
  //   bankTransfer: {
  //     title: "โอนผ่านบัญชีธนาคาร",
  //     description: "โอนเงินผ่านบัญชีธนาคารด้านล่างเพื่อทำการชำระเงิน.",
  //   },
  // };

  
 

  return (
    <>
      <NavbarUser />
      <br />
      <br />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
      <h1>{selectedPayment.MethodNo}</h1>
        <p>{selectedPayment.Method}</p>

        {/* แสดงฟอร์มสำหรับกรอกข้อมูลบัตรเครดิต */}
        {/* {paymentMethod === "creditCard" && (
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
        )} */}
        {/* แสดงฟอร์มสำหรับสแกน */}
        {selectedPayment.MethodNo === 1  && (
          <>
            <div className="d-flex justify-content-center m-2 p-2 width-20">

              <img src={qrcode} alt="" />
            </div>
          </>
        )}
        {/* แสดงฟอร์มสำหรับโอนผ่านบัญชี */}
        {selectedPayment.MethodNo === 2 && (
          <>
            <div className="d-flex-block justify-content-center m-2 p-2">
              <strong>ธนาคารไทยพาณิชย์&nbsp; </strong>
              <strong>ชื่อบัญชี : หุสนา สาและ&nbsp; </strong>
              <strong> เลขบัญชี : &nbsp;</strong>
              <strong
                contentEditable={true}
                onClick={(e) => {
                  const range = document.createRange();
                  range.selectNodeContents(e.target);
                  const selection = window.getSelection();
                  selection.removeAllRanges();
                  selection.addRange(range);
                  document.execCommand("copy");
                  alert("คัดลอกเลขบัญชีแล้ว");
                }}
              >
                2712484924
              </strong>
            </div>
          </>
        )}
        <div className="m-auto mb-3 p-3 d-flex flex-column align-items-center">
        <div>

          <label htmlFor="formFile" className="form-label">
            แนบหลักฐานการชำระเงิน
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        </div>
        {/* {paymentMethod === "creditCard" && <Button variant="contained" onClick={handlePayment}>ชำระเงิน</Button>} */}
        <Link to={`/thankyou`}>
          <Button variant="primary">ยืนยันการชำระเงิน</Button>
        </Link>
      </div>
    </>
  );
}

export default Payment;
