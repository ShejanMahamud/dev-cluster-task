import React from 'react'
import { FiUser } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const user = useSelector((state)=>state.user.user)
  return (
    <nav className='w-full px-10 py-5 flex items-center justify-between'>
        <h1 className='text-xl font-bold text-primary'>Dev Cluster</h1>
        <div className='px-4 py-2 rounded-lg flex items-center gap-3' style={{
            boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'
        }}>
            <FiUser className='text-2xl'/>
            <span>{user?.email}</span>
        </div>
    </nav>
  )
}

export default Navbar