import React from 'react'
import { useDispatch } from 'react-redux'
import {addStudent} from './../features/Students/studentSlice'
import toast from 'react-hot-toast';
import { generateId } from '../Utils/generateId';

const AddStudents = () => {

const dispatch = useDispatch();

const handleAddStudent = (e) => {
    e.preventDefault();
    try{
        const _id = generateId()
        const form = e.target;
        const firstName = form.first_name.value;
        const middleName = form.middle_name.value;
        const lastName = form.last_name.value;
        const className = form.class.value;
        const division = form.division.value;
        const roll_number = form.roll_number.value;
        const address_1 = form.address_1.value;
        const address_2 = form.address_2.value;
        const landmark = form.landmark.value;
        const city = form.city.value;
        const pincode = form.pincode.value;

        const student = {
            _id,
            firstName,
            middleName,
            lastName,
            className,
            division,
            roll_number,
            address_1,
            address_2,
            landmark,
            city,
            pincode
        }
        dispatch(addStudent(student))
        toast.success('Successfully Added Student')
        form.reset()
    }
    catch(error){
        toast.error(error.message)
    }
}
  return (
    <div className='w-full p-5 flex flex-col items-start'>
        <h1 className='font-semibold mb-8'>
            Add Student
        </h1>
        <form onSubmit={handleAddStudent} className='w-full flex flex-col items-center'>
            <div className='w-full grid lg:grid-cols-3 grid-cols-1 items-center gap-4 mb-12'>
                <input type="text" name='first_name' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none' placeholder='First Name' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
                <input type="text" name='middle_name' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none' placeholder='Middle Name' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
                <input type="text" name='last_name' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none' placeholder='Last Name' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
                <select name="class" className="custom-select p-4 rounded-[5px] text-black/50 w-full focus:outline-none">
            <option value="" disabled selected>Select Class</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
        </select>
        <select name="division" className="custom-select p-4 rounded-[5px] text-black/50 w-full focus:outline-none">
            <option value="" disabled selected>Select Devision</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
        </select>
        <input type="number" name='roll_number' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none' placeholder='Roll Number in Digits' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
            </div>
            <div className='w-full grid lg:grid-cols-6 grid-cols-1 items-center gap-4'>
            <textarea name="address_1" required rows="1" className="p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none lg:col-span-3 col-span-1 custom-textarea" placeholder="Address Line 1" style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}></textarea>
            <textarea name="address_2" required rows="1" className="p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none lg:col-span-3 col-span-1 custom-textarea" placeholder="Address Line 2" style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}></textarea>
  
        <input type="text" name='landmark' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none lg:col-span-2' placeholder='Landmark' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
        <input type="text" name='city' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none lg:col-span-2' placeholder='City' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
        <input type="number" name='pincode' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none lg:col-span-2' placeholder='Pincode' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
        <button className='bg-primary text-white font-bold lg:col-span-2 py-3 mt-8 rounded-[5px]'>
                Add Student
            </button>
            </div>
            
        </form>
    </div>
  )
}

export default AddStudents