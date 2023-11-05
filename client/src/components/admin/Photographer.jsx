import { DataGrid } from "@mui/x-data-grid";
import Adminhome from './Adminhome';
import  Search  from './Search';



const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "NumOfPhoto", headerName: "NumOfPhotographer", width: 160 },
    { field: "Price", headerName: "Price", type:"number" ,width: 130 },
    
    
  ];
  
  const rows = [
    {
      id: 1,
      NumOfPhoto: "1",
      Price: "2,000",
     
      
    },
    // เพิ่มข้อมูลแถวอื่น ๆ ตามต้องการ
  ];
function Photographer() {
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

export default Photographer
