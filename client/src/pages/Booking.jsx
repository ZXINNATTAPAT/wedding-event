import { useState } from "react";
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NavbarUser from "../components/Navbar-user/NavbarUser";

function Booking() {
  const [bookingData, setBookingData] = useState({
    roomName: "ชื่อห้อง",
    date: dayjs().toDate(),
    timeStart: null,
    timeEnd: null,
    numberOfPeople: "",
    numOfPhotos: "",
    genreOfMusic: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setBookingData({
      ...bookingData,
      [name]: value,
    });
    // }
  };
  const dateChange = (newValue) => {
    const newDate = newValue.toDate();
    setBookingData({
      ...bookingData,
      date: newDate,
    });
  };
  const timeStartChange = (newValue) => {
    setBookingData({
      ...bookingData,
      timeStart: newValue,
    });
  };
  const timeEndChange = (newValue) => {
    setBookingData({
      ...bookingData,
      timeEnd: newValue,
    });
  };

  console.log("booking data", bookingData);

  
  return (
   <>
   <NavbarUser/>
   <br />
   <br />
   <br />
    <div className="content-wrapper pt-5">
      <div className="container-sm flex-grow-1 container-p-y ">
        <div className="d-flex justify-content-start">
          <h4 className="fw-bold py-3 mb-4">โปรดกรอกรายละเอียด</h4>
        </div>
        <h5 className="d-flex justify-content-start">ข้อมูลงานเบื้องต้น</h5>
        <div className="row">
          <div className="col-8">
            <div className="card mb-4">
              <div className="card-body">
                <Form
                  // onSubmit={}
                >
                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Col sm="12">
                      <TextField
                        required
                        id=""
                        name=""
                        label="ชื่อ-นามสกุลเจ้าบ่าว"
                        fullWidth
                        autoComplete=""
                        variant="outlined"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Col sm="12">
                      <TextField
                        required
                        id=""
                        name=""
                        label="ชื่อ-นามสกุลเจ้าสาว"
                        fullWidth
                        autoComplete=""
                        variant="outlined"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-2" controlId="">
                    <Col>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                        required

                            label="วันที่จัดงาน"
                            format="DD/MM/YYYY"
                            disablePast
                            value={dayjs(bookingData.date)}
                            onChange={dateChange}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-2" controlId="">
                    <Col>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["TimePicker"]}>
                          <TimePicker
                        required

                            label="เวลาเริ่มงาน"
                            ampm={false}
                            mask="__:__"
                            views={["hours", "minutes"]}
                            onChange={timeStartChange}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Col>
                    <Col>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["TimePicker"]}>
                          <TimePicker
                        required

                            label="เวลาจบงาน"
                            ampm={false}
                            mask="__:__"
                            views={["hours", "minutes"]}
                            value={bookingData.timeEnd} // Make sure bookingData.timeEnd is in "HH:mm" format
                            onChange={timeEndChange}

                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Col>
                  </Form.Group>
                  
                  <div>
                  <Form.Group as={Row} className="mb-2" controlId="">
                    <Col>
                      <TextField
                        required
                        type="number"
                        id=""
                        label="จำนวนคน"
                        fullWidth
                        variant="outlined"
                        name="numberOfPeople"
                        onChange={handleChange}
                      />
                    </Col>
                  </Form.Group>
                    <FormControl
                      sx={{ m: 1, minWidth: "100%", textAlign: "left" }}
                    >
                      <InputLabel id="demo-simple-select-helper-labe">
                        จำนวนช่างถ่ายรูป
                      </InputLabel>
                      <Select
                        required
                        id="demo-simple-select-helper"
                        value={bookingData.numOfPhotos}
                        name="numOfPhotos"
                        onChange={handleChange}
                      >
                        <MenuItem value={"ไม่มี"}>ไม่มี</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      sx={{ m: 1, minWidth: "100%", textAlign: "left" }}
                    >
                      <InputLabel id="demo-simple-select-helper-label">
                        ประเภทดนตรี
                      </InputLabel>
                      <Select
                        required
                        id="demo-simple-select-helper"
                        defaultValue="undefined"
                        name="genreOfMusic"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Jazz"}>Jazz</MenuItem>
                        <MenuItem value={"R&B"}>R&B</MenuItem>
                        <MenuItem value={"Blues"}>Blues</MenuItem>
                        <MenuItem value={"Soul"}>Soul</MenuItem>
                        <MenuItem value={"Pop music"}>Pop music</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          {/* card */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>ชื่อห้อง</Card.Title>
              <Card.Text>
                <label>รายละเอียดงาน</label> <br />
                {bookingData.date
                  ? ` วัน ${bookingData.date.toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}`
                  : null}
                <br />
                {bookingData.timeStart
                  ? ` เวลา ${new Date(bookingData.timeStart).toLocaleTimeString(
                      "th-TH",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}`
                  : null}
                {bookingData.timeEnd
                  ? ` -  ${new Date(bookingData.timeEnd).toLocaleTimeString(
                      "th-TH",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}`
                  : null}
                <br />
                {bookingData.numberOfPeople
                  ? `จำนวนคน: ${bookingData.numberOfPeople}`
                  : null}
                <br />
                {bookingData.numOfPhotos !== ""
                  ? `จำนวนช่างถ่ายรูป: ${bookingData.numOfPhotos}`
                  : null}
                <br />
                {bookingData.genreOfMusic !== ""
                  ? `ประเภทดนตรี: ${bookingData.genreOfMusic}`
                  : null}
              </Card.Text>
              
              <Link to="/paymentMethod" ><Button variant="primary">ยืนยันการจอง</Button></Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
     </>
  );
}

export default Booking;
