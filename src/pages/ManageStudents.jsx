// src/components/ManageUsersTable.js
import React, { useState } from 'react';
import { Modal, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, updateStudent } from '../features/Students/studentSlice';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { getRoman } from '../Utils/getRoman';
import moment from 'moment';

const ManageStudents = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [viewOpen,setViewOpen] = useState(false)
    const [updateOpen,setUpdateOpen] = useState(false)
    const [selectedStudent,setSelectedStudent] = useState({})
    const [search, setSearch] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students); 

  const columns = [
    {
        title: 'Name',
        render: (text, record) => `${record.firstName} ${record.middleName} ${record.lastName}`,
        key: 'name',
    },
    {
        title: 'Class',
        render: (text, record) => `${getRoman(record.className)}-${record.division}`,
        key: 'className',
      },
      
    {
      title: 'Roll No.',
      dataIndex: 'roll_number',
      key: 'roll_number',
    },
    {
      title: 'View / Edit / Delete',
      render: (text,record) => (
        <div className='flex items-center gap-5'>
            <button onClick={()=>handleView(record)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <g clip-path="url(#clip0_3_604)">
    <path d="M23.205 11.8047C22.3229 9.5229 20.7915 7.54962 18.8001 6.12873C16.8088 4.70783 14.4447 3.90159 12 3.80966C9.55543 3.90159 7.19134 4.70783 5.19995 6.12873C3.20856 7.54962 1.67717 9.5229 0.795047 11.8047C0.735473 11.9694 0.735473 12.1499 0.795047 12.3147C1.67717 14.5964 3.20856 16.5697 5.19995 17.9906C7.19134 19.4115 9.55543 20.2177 12 20.3097C14.4447 20.2177 16.8088 19.4115 18.8001 17.9906C20.7915 16.5697 22.3229 14.5964 23.205 12.3147C23.2646 12.1499 23.2646 11.9694 23.205 11.8047ZM12 18.8097C8.02505 18.8097 3.82505 15.8622 2.30255 12.0597C3.82505 8.25716 8.02505 5.30966 12 5.30966C15.975 5.30966 20.175 8.25716 21.6975 12.0597C20.175 15.8622 15.975 18.8097 12 18.8097Z" fill="#F33823"/>
    <path d="M12 7.55966C11.11 7.55966 10.24 7.82358 9.49994 8.31805C8.75991 8.81252 8.18314 9.51532 7.84254 10.3376C7.50195 11.1599 7.41283 12.0647 7.58647 12.9376C7.7601 13.8105 8.18868 14.6123 8.81802 15.2416C9.44736 15.871 10.2492 16.2996 11.1221 16.4732C11.995 16.6468 12.8998 16.5577 13.7221 16.2171C14.5443 15.8765 15.2471 15.2997 15.7416 14.5597C16.2361 13.8197 16.5 12.9497 16.5 12.0597C16.5 10.8662 16.0259 9.7216 15.182 8.87768C14.3381 8.03377 13.1935 7.55966 12 7.55966ZM12 15.0597C11.4067 15.0597 10.8266 14.8837 10.3333 14.5541C9.83994 14.2244 9.45543 13.7559 9.22836 13.2077C9.0013 12.6595 8.94189 12.0563 9.05765 11.4744C9.1734 10.8924 9.45912 10.3579 9.87868 9.93834C10.2982 9.51878 10.8328 9.23306 11.4147 9.11731C11.9967 9.00155 12.5999 9.06096 13.1481 9.28802C13.6962 9.51509 14.1648 9.8996 14.4944 10.393C14.8241 10.8863 15 11.4663 15 12.0597C15 12.8553 14.6839 13.6184 14.1213 14.181C13.5587 14.7436 12.7957 15.0597 12 15.0597Z" fill="#F33823"/>
  </g>
  <defs>
    <clipPath id="clip0_3_604">
      <rect width="24" height="24" fill="white" transform="translate(0 0.0596619)"/>
    </clipPath>
  </defs>
</svg>
            </button>
            <button onClick={()=>handleUpdate(record)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <g clip-path="url(#clip0_3_610)">
    <path d="M22.5 19.5597H1.5V21.0597H22.5V19.5597Z" fill="#F33823"/>
    <path d="M19.05 6.80966C19.65 6.20966 19.65 5.30966 19.05 4.70966L16.35 2.00966C15.75 1.40966 14.85 1.40966 14.25 2.00966L3 13.2597V18.0597H7.8L19.05 6.80966ZM15.3 3.05966L18 5.75966L15.75 8.00966L13.05 5.30966L15.3 3.05966ZM4.5 16.5597V13.8597L12 6.35966L14.7 9.05966L7.2 16.5597H4.5Z" fill="#F33823"/>
  </g>
  <defs>
    <clipPath id="clip0_3_610">
      <rect width="24" height="24" fill="white" transform="translate(0 0.0596619)"/>
    </clipPath>
  </defs>
</svg>
            </button>
            <button onClick={()=>handleDelete(record._id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <g clip-path="url(#clip0_3_614)">
    <path d="M10.5 9.05966H9V18.0597H10.5V9.05966Z" fill="#F33823"/>
    <path d="M15 9.05966H13.5V18.0597H15V9.05966Z" fill="#F33823"/>
    <path d="M3 4.55966V6.05966H4.5V21.0597C4.5 21.4575 4.65804 21.839 4.93934 22.1203C5.22064 22.4016 5.60218 22.5597 6 22.5597H18C18.3978 22.5597 18.7794 22.4016 19.0607 22.1203C19.342 21.839 19.5 21.4575 19.5 21.0597V6.05966H21V4.55966H3ZM6 21.0597V6.05966H18V21.0597H6Z" fill="#F33823"/>
    <path d="M15 1.55966H9V3.05966H15V1.55966Z" fill="#F33823"/>
  </g>
  <defs>
    <clipPath id="clip0_3_614">
      <rect width="24" height="24" fill="white" transform="translate(0 0.0596619)"/>
    </clipPath>
  </defs>
</svg>
            </button>
        </div>
      ),
      key: 'actions',
    },
  ];

  const handleView = (student) => {
    setViewOpen(true)
    setSelectedStudent(student)
  }

  const handleUpdate = (student) => {
    setUpdateOpen(true)
    setSelectedStudent(student)
  }

  const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        dispatch(deleteStudent(id))
          Swal.fire({
            title: "Deleted!",
            text: "Student has been deleted.",
            icon: "success"
          });
        }
      });
  }

  const handleUpdateModal = (e,id) => {
    e.preventDefault();
    try{
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
        dispatch(updateStudent({...student,id}))
        setSelectedStudent({...student,id})
        toast.success('Successfully Updated Student')
        setUpdateOpen(false)
    }
    catch(error){
        toast.error(error.message)
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    const filteredStudents = students.filter((student) =>
        `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCurrentPage(1);
      setSearch(filteredStudents)
  };


  return (
    <div className='p-5 w-full'>
        <div className='w-full flex items-center justify-between mb-8'>
            <div className='flex items-center gap-3'>
                <span className='font-semibold'>Manage Students</span>
                <div className='bg-[#EFF3F6] rounded-[10px] border border-[#D4D8DD] flex items-center gap-3 p-3 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00001 9C4.01191 9 2.40001 7.3881 2.40001 5.4C2.40001 3.4119 4.01191 1.8 6.00001 1.8C7.98811 1.8 9.60002 3.4119 9.60002 5.4C9.60002 7.3881 7.98811 9 6.00001 9ZM10.3983 8.5257C11.0265 7.6428 11.4 6.5664 11.4 5.4C11.4 2.4183 8.98172 0 6.00001 0C3.01831 0 0.600006 2.4183 0.600006 5.4C0.600006 8.3817 3.01831 10.8 6.00001 10.8C7.16641 10.8 8.24281 10.4265 9.12572 9.7983L12.5637 13.2363C12.7392 13.4118 12.9696 13.5 13.2 13.5C13.4304 13.5 13.6608 13.4118 13.8363 13.2363C14.1882 12.8844 14.1882 12.3156 13.8363 11.9637L10.3983 8.5257Z" fill="#637381"/>
</svg>
                    <input onChange={handleSearch} placeholder='Search' className='focus:outline-none w-full bg-transparent placeholder:text-[#B5B8BF]'/>
                </div>
            </div>
            <div className='flex items-center gap-3'>
      <button className='border border-[#647887] bg-[#F8F9FB] rounded-[10px] py-[14px] px-[11px] text-[#4E5159] text-[13px] h-[38px] w-[80px] flex items-center justify-center'>Export</button>
      <button className='border border-[#647887] bg-[#F8F9FB] rounded-[10px] py-[14px] px-[11px] text-[#4E5159] text-[13px] h-[38px] w-[80px] flex items-center justify-center'>Filter</button>
      <button className='border border-[#647887] bg-[#F8F9FB] rounded-[10px] py-[14px] px-[11px] text-[#4E5159] text-[13px] h-[38px] w-[80px] flex items-center justify-center'>Print</button>
    </div>
    <span>{moment().format('DD MMMM YYYY HH:mm')}</span>
        </div>
        <Table  className='justify-end' columns={columns} dataSource={searchTerm ? search : students} rowKey="_id" bordered={false} rowClassName={'bg-[#fff6f5]'} rowHoverable={false} pagination={{
          current: currentPage,
          pageSize: 1,
          total: searchTerm ? search.length : students.length,
          onChange: (page) => setCurrentPage(page),
        }}/>
        <Modal width={600} open={viewOpen} onCancel={()=>setViewOpen(false)} footer={false}>
    <div className='flex flex-col items-center gap-5'>
    <h1 className='font-semibold text-xl mb-8'>
            {selectedStudent?.firstName} {"'s "} Details
        </h1>
        <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold'>Student Name</h1>
            <span>{selectedStudent?.firstName} {" "} {selectedStudent?.middleName} {" "} {selectedStudent?.lastName}</span>
        </div>
        <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold'>Student Class</h1>
            <span>{selectedStudent?.className}</span>
        </div>
        <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold'>Student Division</h1>
            <span>{selectedStudent?.division}</span>
        </div>
        <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold'>Student Roll</h1>
            <span>{selectedStudent?.roll_number}</span>
        </div>
        <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold'>Student Address 1</h1>
            <span>{selectedStudent?.address_1}</span>
        </div>
        <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold'>Student Address 2</h1>
            <span>{selectedStudent?.address_2}</span>
        </div>
        <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold'>Landmark</h1>
            <span>{selectedStudent?.landmark}</span>
        </div>
        <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold'>City</h1>
            <span>{selectedStudent?.city}</span>
        </div>
        <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold'>Pin code</h1>
            <span>{selectedStudent?.pincode}</span>
        </div>
    </div>
        </Modal>
        <Modal open={updateOpen} onCancel={()=>setUpdateOpen(false)} footer={false}>
        <form onSubmit={(e)=>handleUpdateModal(e,selectedStudent._id)} className='w-full flex flex-col items-center gap-5'>
        <h1 className='font-semibold text-xl mb-8'>
            Update Student
        </h1>
                <input type="text" name='first_name' defaultValue={selectedStudent?.firstName} required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none w-full' placeholder='First Name' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
                <input type="text" name='middle_name' defaultValue={selectedStudent?.middleName} required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none w-full' placeholder='Middle Name' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
                <input type="text" name='last_name' defaultValue={selectedStudent?.lastName} required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none w-full' placeholder='Last Name' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
                <select name="class" defaultValue={selectedStudent?.className} className="custom-select p-4 rounded-[5px] text-black/50 w-full focus:outline-none">
            <option value="" disabled >Select Class</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        <select defaultValue={selectedStudent?.division} name="division" className="custom-select p-4 rounded-[5px] text-black/50 w-full focus:outline-none">
            <option value="" disabled>Select Devision</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
        </select>
        <input defaultValue={selectedStudent?.roll_number} type="number" name='roll_number' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none w-full' placeholder='Roll Number in Digits' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
            <textarea defaultValue={selectedStudent?.address_1} name="address_1" required rows="1" className="p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none w-full custom-textarea" placeholder="Address Line 1" style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}></textarea>
            <textarea defaultValue={selectedStudent?.address_2} name="address_2" required rows="1" className="p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none w-full custom-textarea" placeholder="Address Line 2" style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}></textarea>
  
        <input defaultValue={selectedStudent?.landmark} type="text" name='landmark' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none w-full' placeholder='Landmark' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
        <input defaultValue={selectedStudent?.city} type="text" name='city' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none w-full' placeholder='City' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
        <input defaultValue={selectedStudent?.pincode} type="number" name='pincode' required className='p-4 rounded-[5px] placeholder:text-[#00000080] focus:outline-none w-full' placeholder='Pincode' style={{boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)'}}/>
        <button className='bg-primary text-white font-bold py-3 mt-8 rounded-[5px] w-full'>
                Update Student
            </button>
            
        </form>
        </Modal>
    </div>
  );
};

export default ManageStudents;
