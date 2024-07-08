import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RootLayout from '../layout/RootLayout';
import Login from '../pages/Auth/Login';
import PrivateRoute from './PrivateRoute';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
       {
        path: '',
       element: <PrivateRoute><Home/></PrivateRoute>
       },
       {
        path: '/login',
        element: <Login/>
       }
      ]
    },
  ]);

export default Route