import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";


function Search() {
    const handleSearch = (event) => {
        // ใส่โค้ดการค้นหาของคุณที่นี่
        // event.target.value จะเป็นข้อความที่ผู้ใช้ป้อนในช่องค้นหา
      };
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
    <TextField
    sx={{
        marginTop: 10,
        marginRight:5
      }}
        label="Search…"
        variant="outlined"
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </div>
  )
}

export default Search
