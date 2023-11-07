import NavbarUser from "../components/Navbar-user/NavbarUser";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "react-bootstrap/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import { MenuItem } from "@mui/material";
import axios from "axios";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("ห้อง", 1, 29000),
  createRow("จำนวนคน", 100, 200),
  createRow("จำนวนช่างถ่ายรูป", 4, 3000),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentOptions, setPaymentOptions] = useState([]);

  useEffect(() => {
    // Fetch payment method options from the backend
    axios.get('http://localhost:5000/PaymentMethod')
      .then((response) => {
        setPaymentOptions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching payment methods:', error);
      });
  }, []);

  const handlePaymentMethod = (e) => {
    setSelectedMethod(e.target.value);
  };

  // console.log(selectedMethod);
  return (
    <>
      <NavbarUser />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: "70%",
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase
                  sx={{
                    margin: "auto",
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                >
                  <Img
                    alt="รูปห้อง"
                    src="https://venuee.s3-ap-southeast-1.amazonaws.com/2019/06/04/l/1559619795-BLISTON-14_07_2016_0518.jpg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    ชื่อห้อง
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    วันที่
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    เวลา
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    จำนวนคน
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    จำนวนช่างถ่ายรูป
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    ประเภทดนตรี
                  </Typography>
                </Grid>
                <Grid item sx={{ textAlign: "center" }}>
                  <Link to="/booking">
                    <Button variant="primary">แก้ไข</Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TableContainer>
            <Table
              sx={{
                margin: "auto",
                maxWidth: 400,
              }}
            >
              <Paper sx={{ margin: 2 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>รายการ</TableCell>
                    <TableCell align="right">จำนวน</TableCell>
                    <TableCell align="right">ราคา</TableCell>
                    <TableCell align="right">รวม</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.desc}>
                      <TableCell>{row.desc}</TableCell>
                      <TableCell align="right">{row.qty}</TableCell>
                      <TableCell align="right">{row.unit}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(row.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>ยอดรวม</TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceTotal)}
                    </TableCell>
                  </TableRow>
                </TableBody>
                <FormControl sx={{ textAlign: "center", width: "90%", margin: 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">เลือกวิธีการชำระเงิน</InputLabel>
                  <Select
                    style={{ textAlign: "center" }}
                    name=""
                    id="demo-simple-select-helper"
                    onChange={handlePaymentMethod}
                  >
                    <MenuItem value="">
                      <em>เลือกวิธีการชำระเงิน</em>
                    </MenuItem>
                    {paymentOptions.map((option) => (
                      <MenuItem key={option.MethodNo} value={option.Method}>
                        {option.Method}
                      </MenuItem>
                    ))}
                  </Select>
                  <Grid sx={{ mt: 2 }}>
                    <Link to={`/payment/${selectedMethod}`}>
                      <Button variant="primary">ชำระเงิน</Button>
                    </Link>
                  </Grid>
                </FormControl>

                {/* <FormControl
                  sx={{ textAlign: "center", width: "90%", margin: 2 }}
                >
                  <InputLabel id="demo-simple-select-helper-label">เลือกวิธีการชำระเงิน</InputLabel>

                  <Select
                    style={{ textAlign: "center" }}
                    name=""
                    id="demo-simple-select-helper"
                    onChange={handlePaymentMethod}

                  >
                    <MenuItem value="">
                      <em>เลือกวิธีการชำระเงิน</em>
                      </MenuItem>
                      </MenuItem>
                      <MenuItem value="creditCard">บัตรเครดิต</MenuItem>
                      <MenuItem value="qrCode">สแกนคิวอาร์โค้ด</MenuItem>
                      <MenuItem value="bankTransfer">
                        โอนผ่านบัญชีธนาคาร
                      </MenuItem>
                          <MenuItem value="">
                          <em>เลือกวิธีการชำระเงิน</em>
                        </MenuItem>
                        {paymentOptions.map((option) => (
                          <MenuItem key={option.PaymentMethodID} value={option.PaymentMethod}>
                            {option.PaymentMethod}
                          </MenuItem>
                        )}
                    </Select>
                  <Grid sx={{ mt: 2 }}>
                    <Link to={`/payment/${selectedMethod}`}>
                      <Button variant="primary">ชำระเงิน</Button>
                    </Link>
                  </Grid>
                </FormControl> */}
              </Paper>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
export default PaymentMethod;