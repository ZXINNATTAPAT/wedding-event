import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Roomdetail from './components/Roomdetail/Roomdetail.jsx';
import Venue from './pages/Venue.jsx';
import EditProflie from './components/EditProflie/EditProflie.jsx';
import Booking from './pages/Booking.jsx';
import PaymentMethod from './pages/PaymentMethod.jsx';
import Payment from './pages/Payment.jsx';
import Thankyou from './pages/Thankyou.jsx';
import Status from './pages/Status.jsx';
// import Menu from '../admin2/Menu.jsx';
// import TableUser from '../admin2/TableUser.jsx';
import Booking from './pages/Booking.jsx';
import PaymentMethod from './pages/PaymentMethod.jsx';
import Payment from './pages/Payment.jsx';
import Thankyou from './pages/Thankyou.jsx';
import Status from './pages/Status.jsx';
import Profile from './components/Profile/profile.jsx';

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
    path: "editprofile",
    element: <EditProflie/>
  },
  {
    path: "booking",
    element: <Booking/>
  },
  {
    path: "/paymentMethod",
    element: <PaymentMethod/>
  },
  {
    path: "/payment/:paymentMethod",
    element: <Payment/>
  },
  {
    path: "/thankyou",
    element: <Thankyou />
  }
  ,
  {
    path: "/status",
    element: <Status />
  }
  // ,
  // {
  //   path: "/menu",
  //   element: <Menu/>
  // }
  // ,
  // {
  //   path: "/tableuser",
  //   element: <TableUser/>
  // }
  
  
  },
  {
    path: "booking",
    element: <Booking/>
  },
  {
    path: "/paymentMethod",
    element: <PaymentMethod/>
  },
  {
    path: "/payment/:paymentMethod",
    element: <Payment/>
  },
  {
    path: "/thankyou",
    element: <Thankyou />
  }
  ,
  {
    path: "/status",
    element: <Status />
  },
  {
    path: "/profile",
    element: <Profile />
  }

  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>,
)
