import  { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Adminhome from "./Adminhome";
import Search from "./Search";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";

function BookingList() {
  const [rows, setRows] = useState([
    {
      id: 1,
      BrideName: "Snow",
      GroomName: "Jon",
      VenueID: "ห้อง 1",
      EventDate: new Date("2022-12-21"),
      EventStartTime: "10:00 AM",
      EventEndTime: "2:00 PM",
      NumofGuest: 100,
      NumofPho: 2,
      GenreOfmusic: "jazz",
      Status: "เสร็จสิ้น",
    },
    
  ]);

  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "BrideName", headerName: "Bride name", width: 130 },
    { field: "GroomName", headerName: "Groom name", width: 130 },
    { field: "VenueID", headerName: "Venue name", width: 130 },
    { field: "EventDate", headerName: "Event Date", type: "date", width: 100 },
    { field: "EventStartTime", headerName: "Event Start Time", width: 130 },
    { field: "EventEndTime", headerName: "Event End Time", width: 130 },
    { field: "NumofGuest", headerName: "NoOfGuest", width: 100 },
    { field: "NumofPho", headerName: "NoOfPhoto", width: 100 },
    { field: "GenreOfmusic", headerName: "GenreOfmusic", width: 120 },
    {
      field: "Status",
      headerName: "Status",
      width: 125,
      renderCell: (params) => (
        <Select
          value={params.row.Status}
          onChange={(e) => {
            const newValue = e.target.value;
            const updatedRows = [...rows];
            const rowIndex = updatedRows.findIndex(
              (row) => row.id === params.row.id
            );
            updatedRows[rowIndex] = {
              ...updatedRows[rowIndex],
              Status: newValue,
            };
            setRows(updatedRows);
          }}
        >
          <MenuItem value="เสร็จสิ้น">เสร็จสิ้น</MenuItem>
          <MenuItem value="รอดำเนินการ">รอดำเนินการ</MenuItem>
          <MenuItem value="รอชำระเงิน">รอชำระเงิน</MenuItem>
          <MenuItem value="ยกเลิก">ยกเลิก</MenuItem>
        </Select>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <Button variant="contained" color="error" onClick={() => handleDelete(params.row.id)}><DeleteIcon/>Del</Button>
      ),
    },
  ];

  const handleDelete = (rowId) => {
    const updatedRows = rows.filter((row) => row.id !== rowId);
    setRows(updatedRows);
  };

  return (
    <>
      <Adminhome />
      <Search />
      <div
        style={{ height: 400, width: "100%", marginTop: 10, marginLeft: 60 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          selectionModel={selectedRowIds}
          onSelectionModelChange={(newSelection) => {
            setSelectedRowIds(newSelection);
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default BookingList;
