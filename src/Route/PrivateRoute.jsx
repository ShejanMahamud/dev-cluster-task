import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const user = useSelector((state) => state.user.user);
    const location = useLocation()
    if(user){
        return children
    }
  return <Navigate to={'/login'} replace={true} state={location.pathname}/>
}

export default PrivateRoute