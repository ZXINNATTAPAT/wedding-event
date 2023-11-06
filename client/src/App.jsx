import "./app.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import Pagination from "./components/Pagination/Paginations";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Pagination />
    </>
  );
}

export default App;
