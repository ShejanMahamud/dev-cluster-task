import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../features/User/userSlice";
import studentSlice from "../features/Students/studentSlice";


const rootReducer = combineReducers({
    user: userSlice,
    student: studentSlice
})

export default rootReducer