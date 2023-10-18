import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Roomdetail from './components/Roomdetail/Roomdetail.jsx';
import EditProflie from './components/EditProflie/EditProflie.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "roomdetail/:roomId",
    element: <Roomdetail/>
  },
  {
    path: "editproflie",
    element: <EditProflie/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>,
)
