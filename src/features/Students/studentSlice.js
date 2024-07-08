import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: []
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudent: (state,action) => {
            state.students.push(action.payload)
        },
        updateStudent: (state, action) => {
            const { id, ...updatedStudent } = action.payload;
            console.log('Updating student with ID:', id);
            const index = state.students.findIndex(student => student._id === id);
            console.log('Found student at index:', index);
            if (index !== -1) {
              state.students[index] = { ...updatedStudent, _id: id };
            }
          },
        deleteStudent: (state,action) => {
            state.students = state.students.filter(student => student.id !== action.payload.id)
        }   
    }
})
export const {addStudent,updateStudent,deleteStudent} = studentSlice.actions;

export default studentSlice.reducer