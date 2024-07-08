import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {logOut} from './../features/User/userSlice'
import toast from 'react-hot-toast'

const Sidebar = () => {
    const {pathname} = useLocation()
    const signOut = async () => {
        try{
            await logOut()
            toast.success('Logout Successfuly!')
        }
        catch(error){
            toast.error(error.message)
        }
    }
  return (
    <div className='w-full flex flex-col items-start gap-3 p-5'>
        <NavLink
        end
              className={({ isActive }) =>
                isActive
                  ? "bg-primary text-white rounded-lg w-full flex items-center gap-3 py-3 px-3 font-bold"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#00000099]"
              }
              to={"/"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
  <g clip-path="url(#clip0_1_168)">
    <path d="M22.5 22.5H21V18.75C20.9989 17.7558 20.6034 16.8026 19.9004 16.0996C19.1974 15.3966 18.2442 15.0011 17.25 15V13.5C18.6419 13.5015 19.9764 14.0552 20.9606 15.0394C21.9448 16.0236 22.4985 17.3581 22.5 18.75V22.5Z" className={`${pathname !== '/' ? 'fill-black opacity-60' : 'fill-white'}`}/>
    <path d="M16.5 22.5H15V18.75C14.9988 17.7558 14.6034 16.8027 13.9004 16.0996C13.1973 15.3966 12.2442 15.0012 11.25 15H6.75C5.7558 15.0012 4.80265 15.3966 4.09964 16.0996C3.39664 16.8027 3.00117 17.7558 3 18.75V22.5H1.5V18.75C1.50163 17.3581 2.05527 16.0237 3.03949 15.0395C4.0237 14.0553 5.35811 13.5016 6.75 13.5H11.25C12.6419 13.5016 13.9763 14.0553 14.9605 15.0395C15.9447 16.0237 16.4984 17.3581 16.5 18.75V22.5Z" className={`${pathname !== '/' ? 'fill-black opacity-60' : 'fill-white'}`}/>
    <path d="M15 1.5V3C15.9946 3 16.9484 3.39509 17.6517 4.09835C18.3549 4.80161 18.75 5.75544 18.75 6.75C18.75 7.74456 18.3549 8.69839 17.6517 9.40165C16.9484 10.1049 15.9946 10.5 15 10.5V12C16.3924 12 17.7277 11.4469 18.7123 10.4623C19.6969 9.47774 20.25 8.14239 20.25 6.75C20.25 5.35761 19.6969 4.02226 18.7123 3.03769C17.7277 2.05312 16.3924 1.5 15 1.5Z" className={`${pathname !== '/' ? 'fill-black opacity-60' : 'fill-white'}`}/>
    <path d="M9 3C9.74168 3 10.4667 3.21993 11.0834 3.63199C11.7001 4.04404 12.1807 4.62971 12.4645 5.31494C12.7484 6.00016 12.8226 6.75416 12.6779 7.48159C12.5333 8.20902 12.1761 8.8772 11.6517 9.40165C11.1272 9.9261 10.459 10.2833 9.73159 10.4279C9.00416 10.5726 8.25016 10.4984 7.56494 10.2145C6.87971 9.93072 6.29404 9.45007 5.88199 8.83339C5.46993 8.2167 5.25 7.49168 5.25 6.75C5.25 5.75544 5.64509 4.80161 6.34835 4.09835C7.05161 3.39509 8.00544 3 9 3ZM9 1.5C7.96165 1.5 6.94662 1.80791 6.08326 2.38478C5.2199 2.96166 4.54699 3.7816 4.14963 4.74091C3.75227 5.70022 3.64831 6.75582 3.85088 7.77422C4.05345 8.79262 4.55346 9.72808 5.28769 10.4623C6.02192 11.1965 6.95738 11.6966 7.97578 11.8991C8.99418 12.1017 10.0498 11.9977 11.0091 11.6004C11.9684 11.203 12.7883 10.5301 13.3652 9.66674C13.9421 8.80339 14.25 7.78835 14.25 6.75C14.25 5.35761 13.6969 4.02226 12.7123 3.03769C11.7277 2.05312 10.3924 1.5 9 1.5Z" className={`${pathname !== '/' ? 'fill-black opacity-60' : 'fill-white'}`}/>
  </g>
  <defs>
    <clipPath id="clip0_1_168">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
              <span className="text-base">Add Student</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-primary text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#00000099]"
              }
              to={"/manage_students"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_1_154)">
    <path d="M22.5 6H12V7.5H22.5V6Z" className={`${pathname === '/' ? 'fill-black opacity-60' : 'fill-white'}`} />
    <path d="M22.5 16.5H12V18H22.5V16.5Z" className={`${pathname === '/' ? 'fill-black opacity-60' : 'fill-white'}`}/>
    <path d="M7.5 10.5H3C2.60232 10.4995 2.22105 10.3414 1.93984 10.0602C1.65864 9.77895 1.50046 9.39768 1.5 9V4.5C1.50046 4.10232 1.65864 3.72105 1.93984 3.43984C2.22105 3.15864 2.60232 3.00046 3 3H7.5C7.89768 3.00046 8.27895 3.15864 8.56016 3.43984C8.84136 3.72105 8.99954 4.10232 9 4.5V9C8.99954 9.39768 8.84136 9.77895 8.56016 10.0602C8.27895 10.3414 7.89768 10.4995 7.5 10.5ZM3 4.5V9H7.5009L7.5 4.5H3Z" className={`${pathname === '/' ? 'fill-black opacity-60' : 'fill-white'}`}/>
    <path d="M7.5 21H3C2.60232 20.9995 2.22105 20.8414 1.93984 20.5602C1.65864 20.279 1.50046 19.8977 1.5 19.5V15C1.50046 14.6023 1.65864 14.221 1.93984 13.9398C2.22105 13.6586 2.60232 13.5005 3 13.5H7.5C7.89768 13.5005 8.27895 13.6586 8.56016 13.9398C8.84136 14.221 8.99954 14.6023 9 15V19.5C8.99954 19.8977 8.84136 20.279 8.56016 20.5602C8.27895 20.8414 7.89768 20.9995 7.5 21ZM3 15V19.5H7.5009L7.5 15H3Z" className={`${pathname === '/' ? 'fill-black opacity-60' : 'fill-white'}`}/>
  </g>
  <defs>
    <clipPath id="clip0_1_154">
      <rect width="24" height="24" className={`${pathname === '/' ? 'fill-black opacity-60' : 'fill-white'}`}/>
    </clipPath>
  </defs>
</svg>
              <span className="text-base">Manage Student</span>
            </NavLink>

            <button onClick={signOut} className='flex items-center gap-3 py-3 px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_1_192)">
    <path d="M4.5 22.5H13.5C13.8977 22.4995 14.279 22.3414 14.5602 22.0602C14.8414 21.7789 14.9995 21.3977 15 21V18.75H13.5V21H4.5V3H13.5V5.25H15V3C14.9995 2.60232 14.8414 2.22105 14.5602 1.93984C14.279 1.65864 13.8977 1.50046 13.5 1.5H4.5C4.10232 1.50046 3.72105 1.65864 3.43984 1.93984C3.15864 2.22105 3.00046 2.60232 3 3V21C3.00046 21.3977 3.15864 21.7789 3.43984 22.0602C3.72105 22.3414 4.10232 22.4995 4.5 22.5Z" fill="black" fill-opacity="0.6"/>
    <path d="M15.4395 15.4395L18.129 12.75H7.5V11.25H18.129L15.4395 8.5605L16.5 7.5L21 12L16.5 16.5L15.4395 15.4395Z" fill="black" fill-opacity="0.6"/>
  </g>
  <defs>
    <clipPath id="clip0_1_192">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
<span className='text-[#00000099]'>Logout</span>
            </button>
    </div>
  )
}

export default Sidebar