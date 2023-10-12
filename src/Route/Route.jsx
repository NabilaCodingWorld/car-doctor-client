import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import Order from "../Page/Home/Service/Order";
import Data from "../Page/Data/Data";
import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/data',
            element: <PrivateRoute><Data></Data></PrivateRoute>
        },
        {
          path: 'services/:_id',
          element: <Order></Order>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params._id}`)
        }
      ]
    },
  ]);