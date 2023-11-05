import { DataGrid } from "@mui/x-data-grid";
import Adminhome from './Adminhome';
import  Search  from './Search';



const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "Username", headerName: "Username", width: 130 },
    { field: "Password", headerName: "Password",width: 130 },
    { field: "Email", headerName: "Email", type:"email" ,width: 250 },
    { field: "PhoneNo", headerName: "PhoneNo",width: 130 },
    
    
  ];
  
  const rows = [
    {
      id: 1,
      Username: "John",
      Password: "0124382",
      Email: "john@example.com",
      PhoneNo: "0938927823",
     
      
    },
    // เพิ่มข้อมูลแถวอื่น ๆ ตามต้องการ
  ];
function User() {
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

export default User
