// import * as React from 'react';
import Navbar from "../components/Navbar/Navbar";
import { Link } from 'react-router-dom'
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

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

  const handlePaymentMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };
  console.log(selectedMethod);
  return (
    <>
    <Navbar/>
<br />
<br />
<br />
<br />
<br />
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
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
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" >
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
              <Grid item>
              <Link to="/booking" ><Button variant="contained">แก้ไข</Button></Link>

                {/* <Button sx={{ cursor: "pointer" }} variant="contained">
                  แก้ไข
                </Button> */}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" >
                ราคาห้อง
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <TableContainer>
        <Table
          sx={{
            margin: "auto",
            maxWidth: 400,
          }}
        >
          <Paper sx={{ margin: 2 }}>
            <TableHead>
              {/* <TableRow>
            <TableCell align="center" colSpan={3}>
              รายละเอียด
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow> */}
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
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
              ))}
              {/* <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>ราคารวม</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow> */}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>ยอดรวม</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>
            </TableBody>
            <FormControl sx={{ width: "50%", marginTop: 2 }}>
              <select name="" id="" onChange={handlePaymentMethodChange}>
                <option value="">เลือกวิธีชำระเงิน</option>
                <option value="">บัตรเครดิต</option>
                <option value="">สแกนคิวอาร์โค้ด</option>
                <option value="">โอนผ่านบัญชีธนาคาร</option>
              </select>
              {/* <Link to={`/payment/${selectedMethod}`}>
                <button>ชำระเงิน</button>
              </Link> */}
            </FormControl>
            <Button sx={{ margin: 2 }} variant="contained">
              ชำระเงิน
            </Button>
          </Paper>
        </Table>
      </TableContainer>
    </>
  );
}
export default PaymentMethod;
