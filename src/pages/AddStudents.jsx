import React from 'react'

const AddStudents = () => {
  return (
    <div className='w-full p-5 flex flex-col items-start'>
        <h1 className='font-semibold mb-8'>
            Add Student
        </h1>
        <form className='w-full flex flex-col items-center'>
            <div className='w-full grid grid-cols-3 items-center gap-4'>
                <input type="text" name='first_name' required className='p-4 rounded-[5px] placeholder:text-[#00000080]' placeholder='First Name' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
                <input type="text" name='middle_name' required className='p-4 rounded-[5px] placeholder:text-[#00000080]' placeholder='Middle Name' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
                <input type="text" name='last_name' required className='p-4 rounded-[5px] placeholder:text-[#00000080]' placeholder='Last Name' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
                <select name="example" className="custom-select p-4 rounded-[5px] text-black/50 w-full mt-4 focus:outline-none">
            <option value="" disabled selected>Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
            </div>
        </form>
    </div>
  )
}

export default AddStudents