import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import NavbarUser from "../components/Navbar-user/NavbarUser";
import { BsTrash3Fill } from "react-icons/bs";

function MyComponent() {
  const [status, setStatus] = useState("รอดำเนินการ");
  const [showCancelButton, setShowCancelButton] = useState(true);
  const handleCancelButton = () => {
    const confirmed = window.confirm(
      "แน่ใจนะว่าจะยกเลิก? ทางเราจะไม่คืนเงินทุกกรณี"
    );

    if (confirmed) {
      setStatus("คุณยังไม่ทำการจอง"); // อัปเดตสถานะเมื่อยกเลิก
      setShowCancelButton(false);
    }
  };

  return (
    <>
      <NavbarUser />
      <br />
      <br />
      <br />
      <br />
      <div className="content-wrapper">
        <div className="container-xl flex-grow-1 container-p-y">
          <div className="card mb-4">
            <h5 className="card-header">ตรวจสอบสถานะ</h5>
            <div className="card-body">
              <Toast className="m-3">
                <Toast.Header closeButton={false}>
                  <strong className="me-auto">สถานะ</strong>
                </Toast.Header>
                <Toast.Body >{status}</Toast.Body>
                {showCancelButton && (
                    <div className="d-flex justify-content-center m-3">
                  <Button className="d-flex justify-content-center align-items-center" variant="danger" onClick={handleCancelButton}>
                    <BsTrash3Fill />
                    ยกเลิก
                  </Button>
                  </div>
                )}
              </Toast>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
