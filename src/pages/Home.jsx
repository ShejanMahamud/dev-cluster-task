import React from 'react'
import { useSelector } from 'react-redux'
import {logOut} from  './../features/User/userSlice'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const user = useSelector((state) => state.user.user);
    const navigate= useNavigate()
    return (
        <div>
          {user ? (
            <div>
              <h3>Welcome, {user.displayName}</h3>
              <button onClick={()=>logOut()}>Logout</button>
            </div>
          ) : (
            <button onClick={()=>navigate('/login')}>Login with Google</button>
          )}
        </div>
      );
}

export default Home