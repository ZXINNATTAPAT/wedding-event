import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Booking from './pages/Booking.jsx';
import PaymentMethod from './pages/PaymentMethod.jsx';

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
    path: "booking",
    element: <Booking/>
  },
  {
    path: "paymentMethod",
    element: <PaymentMethod/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>,
)
