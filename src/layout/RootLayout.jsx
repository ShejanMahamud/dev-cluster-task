import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initializeAuth } from '../features/User/userSlice';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.loading);
  
    useEffect(() => {
      dispatch(initializeAuth());
    }, [dispatch]);
  
    if(loading){
        return  <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    }
  return (
    <>
    <Outlet/>
    <Toaster position="top-right" reverseOrder={true} />
    </>
  )
}

export default RootLayout