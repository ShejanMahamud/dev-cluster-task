import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Login from '../pages/Auth/Login';
import PrivateRoute from './PrivateRoute';
import AddStudents from '../pages/AddStudents';
import ManageStudents from '../pages/ManageStudents';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
       {
        path: '',
       element: <PrivateRoute><AddStudents/></PrivateRoute>
       },
       {
        path: '/manage_students',
        element: <PrivateRoute><ManageStudents/></PrivateRoute>
       }
      ]
    },
    {
        path: '/login',
        element: <Login/>
       }
  ]);

export default Route