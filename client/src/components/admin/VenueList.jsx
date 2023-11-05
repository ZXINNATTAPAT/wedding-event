import { DataGrid } from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Adminhome from './Adminhome';
import  Search  from './Search';



const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "VenueName", headerName: "Venue name", width: 130 },
    { field: "MaxCapicity", headerName: "Max Capicity", width: 130 },
    { field: "VenuePrice", headerName: "Price", width: 130 },
    
    {
      field: "Status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <Select
          value={params.row.Status} // ค่าสถานะที่มีในแถว
          onChange={(e) => {
            // รับค่าที่เลือกจาก dropdown และอัปเดตค่าสถานะในแถว
            const newValue = e.target.value;
            // ทำอย่างไรก็ตามที่คุณต้องการเมื่อค่าสถานะเปลี่ยน
            // เช่น เรียก API เพื่อบันทึกการเปลี่ยนแปลงลงในฐานข้อมูล
            params.api.setEditCellValue({
              id: params.id,
              field: "Status",
              value: newValue,
            });
          }}
        >
          <MenuItem value="เสร็จสิ้น">ว่าง</MenuItem>
          <MenuItem value="รอดำเนินการ">ไม่ว่าง</MenuItem>
        </Select>
      ),
    },
  ];
  
  const rows = [
    {
      id: 1,
      VenueName: "ห้อง 1",
      MaxCapicity: "50",
      VenuePrice: "50,000",
     
      
    },
    // เพิ่มข้อมูลแถวอื่น ๆ ตามต้องการ
  ];
function Venue() {
  return (
    <>
    <Adminhome/>
    <Search/>
    <div>
      <div style={{ height: 400, width: "100%", marginTop: 10,marginLeft:60 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
    </div>
    </>
  )
}

export default Venue
